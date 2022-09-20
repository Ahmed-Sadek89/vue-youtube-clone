<script lang="ts">
import { Items } from '@/types/Items';
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router';
import { demoProfilePicture } from '@/assets/utils/Constant';


export default defineComponent({
    name: 'ChannelCard',
    props: {
        item: {
            type: Object as PropType<Items>,
            default: {}
        },
        page: {
            type: String
        }
    },
    emits: ['goChannelEmit'],
    setup() {
        const router = useRouter()
        return {
            router,demoProfilePicture
        }
    }
})
</script>

<template>
    <div class="card vedio2" style="background: inherit">
        <div class="vedio-thumbnails2">
            <img
                referrerpolicy="no-referrer"
                :src="`${
                    !item?.snippet?.thumbnails?.high?.url ?
                    demoProfilePicture :
                    item?.snippet?.thumbnails?.high?.url
                }`" 
                :alt="`${
                    item?.snippet?.thumbnails?.high?.url &&
                    item.snippet.title
                }`"
                class="card-img-top"
                @click="page !== 'channelDetails' &&
                    router.push({ 
                    name: 'ChannelDetails', 
                    params: { id: item.id.channelId } 
                })"
            />
        </div>
        <div class="card-body videoDesc2">
            <h5
                class="card-title vedio-title2" 
                @click=" page !== 'channelDetails' &&
                    router.push({ 
                        name: 'ChannelDetails', 
                        params: { id: item.id.channelId } 
                    })
                "
            >
                {{
                    page !== 'channelDetails' ?
                    item.snippet.channelTitle :
                    item.snippet.title
                }}
                <i class="fas fa-check-circle"></i>
            </h5>
            <span v-if="item.statistics">
                {{ parseInt(item.statistics.subscriberCount).toLocaleString('en-US') }} 
                subscribers
            </span>
        </div>
    </div>
</template>
    