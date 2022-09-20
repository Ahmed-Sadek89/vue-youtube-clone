<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './types';
import ChannelCard from '../ChannelCard/ChannelCard.vue';
import VedioCard from '../VedioCard/VedioCard.vue';
import ItemsLoading from '../ItemsLoading/ItemsLoading.vue';
import ErrorConnection from '../ErrorConnection/ErrorConnection.vue';

export default defineComponent({
    name: "Menubar",
    props,
    setup() {
        return {};
    },
    components: { ChannelCard, VedioCard, ItemsLoading, ErrorConnection }
})
</script>


<template>
    <div class="menubar">
        <h1>
            {{categorySelected}} 
            <span class="menubar-logo">videos</span>
        </h1>
        <div v-if="loading === true" class="container menubar-content">
            <ItemsLoading />
        </div>
        <div v-if="error === true" class="container menubar-content">
            <ErrorConnection />
        </div>
        <div class="container">
            <div class="menubar-content row">
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
            
            <div class="menubar-footer">
                <h4>© 2022 Copyright All Right Reserved</h4>
                <a href="https://ahmed-sadek89.github.io/s-a-d-e-k/" target="_blank">
                    Ahmed Sadek
                </a>
            </div> 
        </div>
    </div>
</template>
