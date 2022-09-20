<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: "ChannelBg",
    props: {
        loading: {
            type: Boolean
        },
        error: {
            type: Boolean
        },
        data: {
            type: Array as PropType<any[]>,
            default: []
        },
    },
    setup () {

        return {}
    }
})
</script>


<template>
    <div class="channel-background">
        <template v-if="loading || data.length === 0 || error">
            <div class="channel-background"></div>
        </template>
        <template v-else>
            <img 
                referrerpolicy="no-referrer"
                :src="`${data[0].brandingSettings.image.bannerExternalUrl}`" 
                :alt="`${data[0].brandingSettings.channel.title}`">
        </template>
    </div>
</template>