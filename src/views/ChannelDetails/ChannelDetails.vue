<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import DispatchData from '@/DispatchData';
import ChannelBg from '@/components/ChannelBg/ChannelBg.vue';
import ChannelInfo from '../../components/ChannelInfo/ChannelInfo.vue';
import VediosByChannel from '@/components/VediosByChannel/VediosByChannel.vue';
import { useStore } from 'vuex';


export default defineComponent({
    name: "ChannelDetails",
    setup() {
        const route = useRoute();
        const { state } = useStore();

        const channelId = route.params.id;

        // channel info by channel id
        const { 
            loading: channelLoading, 
            data: channelDetails, 
            error: channelError 
        } = DispatchData(
            channelId, state.channelDetails, "getChannelDetailsByIdAction"
        );
        // vedios by channel id
        const { 
            loading: vediosLoading, 
            data: vediosAccordingToChannel, 
        } = DispatchData(
            channelId, state.vediosRelatedToChannel, "getVediosByChannelIdAction"
        );
        
        return {
            channelLoading,
            channelDetails,
            channelError,
            vediosLoading,
            vediosAccordingToChannel,
        };
    },
    components: { ChannelBg, ChannelInfo, VediosByChannel }
})
</script>

<template>
    <div>
        <ChannelBg 
            :loading="channelLoading"
            :data="channelDetails"
            :error="channelError"
        />
        <!-- test if there loading error or data here -->   
        <ChannelInfo 
            :loading="channelLoading"
            :data="channelDetails"
            :error="channelError"
        />
        <!-- get all vedio that related to this channel -->
        <VediosByChannel
            :loading="vediosLoading"
            :data="vediosAccordingToChannel"
        />
    </div>
</template>
