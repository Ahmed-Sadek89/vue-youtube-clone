<script lang="ts">
import { channelNotFound } from '@/assets/utils/Constant';
import { Items } from '@/types/Items'
import { defineComponent, PropType, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import ErrorConnection from '../ErrorConnection/ErrorConnection.vue';

export default defineComponent({
    name: "VedioWatch",
    props: {
        loading: {
            type: Boolean,
        },
        error: {
            type: Boolean,
        },
        data: {
            type: Array as PropType<Items[]>,
            default: []
        }
    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const vedioId = computed(() => {
            return route.params.id
        })
        return {channelNotFound, router, vedioId};
    },
    components: { ErrorConnection }
})
</script>

<template>
    <div>
        <template v-if="loading">
            <div class="channel-background" style="height: 60vh"></div>
        </template>
        <template v-else-if="error">
            <ErrorConnection />
        </template>
        <template v-else-if="data.length === 0">
            <div style="display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh"
            >
                <img :src="`${channelNotFound}`" alt="page not found" />
                <h1>this vedio is not found</h1>
                <button class="btn btn-danger" @click="router.push({name: 'Home'})">
                    back to main
                </button>
            </div>
        </template>
        <template v-else>
            <div>
                <iframe
                    allowfullscreen
                    height="580" 
                    width="100%"
                    :src="`https://www.youtube.com/embed/${vedioId}`"
                ></iframe>
            </div>
            <div v-show="data" class="data">
                <h1>{{data[0].snippet.title}}</h1>
                <div class="div">
                    <h6
                        @click="router.push({name: 'ChannelDetails', params :{id: data[0].snippet.channelId}})"
                    >
                        <span>{{data[0].snippet.channelTitle}}</span>
                        <i class="fas fa-check-circle"></i>
                    </h6>
                    <p>
                        <span>
                            {{parseInt(data[0].statistics.viewCount).toLocaleString('en-US')}} views
                        </span>
                        <span>
                            {{parseInt(data[0].statistics.likeCount).toLocaleString('en-US')}} likes
                        </span>
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>
