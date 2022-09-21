<script lang="ts">
import { Items } from '@/types/Items';
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "VedioCard",
    props: {
        item: {
            type: Object as PropType<Items>,
            default: {}
        },
        page: {
            type: String
        }
    },
    setup () {
        const router = useRouter()
        return {
            router
        }
    }
})
</script>

<template>
    <div class="card vedio" style="background: #000">
        <div class="vedio-thumbnails">
            <img
                referrerpolicy="no-referrer"
                :src="`${
                    item.snippet.thumbnails.high.url || 
                    item.snippet.thumbnails.default.url || 
                    item.snippet.thumbnails.medium.url
                }`" 
                class="card-img-top"
                :alt="`${item.snippet.title}`"
                @click="router.push({
                    name: 'VideoDetails',
                    params: {
                        id: item.id.videoId
                    }
                })"
            /> 
        </div>
        <div class="card-body videoDesc">
            <h5
                class="card-title vedio-title"
                @click="router.push({
                    name: 'VideoDetails',
                    params: {
                        id: item.id.videoId
                    }
                })"
            >
                {{item.snippet.title}}
            </h5>
            <p
                class="card-text channel-title"
                @click="page !=='channelDetails' &&
                 router.push({ 
                    name: 'ChannelDetails', 
                    params: { id: item.snippet.channelId } 
                })"
            >
                <span>{{item.snippet.channelTitle}}</span>
                <i class="fas fa-check-circle"></i>
            </p>
        </div>
    </div>
</template>
        