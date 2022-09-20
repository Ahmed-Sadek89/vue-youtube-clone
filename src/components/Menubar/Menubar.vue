<script lang="ts">
import { defineComponent, computed } from 'vue'
import { props } from './types';
import ChannelCard from '../ChannelCard/ChannelCard.vue';
import VedioCard from '../VedioCard/VedioCard.vue';
import ItemsLoading from '../ItemsLoading/ItemsLoading.vue';
import ErrorConnection from '../ErrorConnection/ErrorConnection.vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: "Menubar",
    props,
    setup() {
        const route = useRoute();
        
        const searchTerm = computed(() => {
            return route.params.search_term;
        });
        return {searchTerm};
    },
    components: { ChannelCard, VedioCard, ItemsLoading, ErrorConnection }
})
</script>


<template>
    <div class="menubar">
        <h1 v-if="page !== 'searchfeed'">
            {{categorySelected}} 
            <span class="menubar-logo">videos</span>
        </h1>
        <h1 v-else>
            search result for:
            <span class="menubar-logo">{{searchTerm}} </span>
            vedios
        </h1>
        <div v-if="loading === true" class="container menubar-content">
            <ItemsLoading />
        </div>
        <div v-if="error === true" class="container menubar-content">
            <ErrorConnection />
        </div>
        <div class="container">
            <div :class="[
                `${ page !== 'searchfeed' ? 
                    'menubar-content' : 
                    'menubar-content-searchPage'
                }`,
                 'row'
                ]"
            >
                <template v-for="(item, index) in data" :key="index">
                    <!-- channel -->
                    <div 
                        class="col-xs-12 col-sm-6 col-lg-4 gapping"
                        v-if="item.id.channelId"
                    >
                        <ChannelCard :item="item" />
                    </div>

                    <!-- vedio -->
                    <div 
                        class="col-xs-12 col-sm-6 col-lg-4 gapping"
                        v-else-if="item.id.videoId"
                    >
                        <VedioCard :item="item" />
                    </div>
                </template>
            </div>
            
            <div class="menubar-footer"
                :class="[
                    `${ page !== 'searchfeed' ? 
                        'menubar-footer' : 
                        'menubar-footer-searchPage'
                    }`,
                    'row'
                ]"
            >
                <h4>© 2022 Copyright All Right Reserved</h4>
                <a href="https://ahmed-sadek89.github.io/s-a-d-e-k/" target="_blank">
                    Ahmed Sadek
                </a>
            </div> 
        </div>
    </div>
</template>
