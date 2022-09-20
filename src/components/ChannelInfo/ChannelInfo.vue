<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ChannelCard from '../ChannelCard/ChannelCard.vue';
import OneItemLoading from '../OneItemLoading/OneItemLoading.vue';
import { channelNotFound, pageNotFound } from '@/assets/utils/Constant';
import { useRouter } from 'vue-router';
import { Items } from '@/types/Items';
import ErrorConnection from '../ErrorConnection/ErrorConnection.vue';

export default defineComponent({
    name: "ChannelInfo",
    props: {
        loading: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        data: {
            type: Array as PropType<Items[]>,
            default: []
        },
    },
    setup() {
        const router = useRouter()
        return {channelNotFound, router, pageNotFound, window};
    },
    components: { ChannelCard, OneItemLoading, ErrorConnection }
})
</script>

<template>
    <div class="channel">
        <div class="channel-loading" v-if="loading">
            <OneItemLoading />
        </div>
        <ErrorConnection v-else-if="error" />
        <div class="channel-not-found" v-else-if="data.length === 0">
            <img :src="`${channelNotFound}`" alt="page not found" />
            <h1>this channel is not found</h1>
            <button class="btn btn-danger" @click="router.push({name: 'Home'})">
                back to main
            </button>
        </div>
        <div class="channel-data" v-else>
            <ChannelCard :item="data[0]" page="channelDetails" />
        </div>
    </div>
</template>