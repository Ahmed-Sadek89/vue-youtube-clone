<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VedioCard from '../VedioCard/VedioCard.vue';
import ItemsLoading from '../ItemsLoading/ItemsLoading.vue';
import { Items } from '@/types/Items';

export default defineComponent({
    name: "ChannelInfo",
    props: {
        loading: {
            type: Boolean
        },
        data: {
            type: Array as PropType<Items[]>,
            default: []
        },
    },
    setup() {
        return {};
    },
    components: { VedioCard, ItemsLoading }
})
</script>

<template>
    <div class="vedios-by-channel">
        <div class="loading" v-if="loading">
            <ItemsLoading />
        </div>
        <div class="data" v-else>
            <div class="container">
                <div class="row">
                    <template v-for="(item, index) in data" :key="index">
                        <div 
                            class="col-xs-12 col-sm-6 col-lg-3 gapping"
                        >
                            <VedioCard :item="item" page="channelDetails" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>