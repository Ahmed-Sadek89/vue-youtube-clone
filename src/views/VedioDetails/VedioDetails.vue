<script lang="ts">
import DispatchData from '@/DispatchData';
import { defineComponent, computed, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import VedioWatch from '../../components/VedioWatch/VedioWatch.vue';
import VedioCard from '@/components/VedioCard/VedioCard.vue';
    
export default defineComponent({
    setup() {
        const route = useRoute();
        const { state, dispatch } = useStore();
        const vedioId = computed(() => {
            return route.params.id
        });
        watch(() => vedioId.value,(newVal) => {
            dispatch('getVedioDetailsAction', newVal)
            dispatch('getVediosRelatedToVedioId', newVal)
        })
        // get vedio details by id
        const { 
            loading: vedioDetailsLoading, 
            data: vedioDetailsData, 
            error: vedioDetailsError 
        } = DispatchData(
            vedioId.value, state.vedioDetailsState, "getVedioDetailsAction"
        );
        // get all vedios related to id
        const { 
            loading: vediosLoading, 
            data: vediosData, 
            error: vediosError 
        } = DispatchData(
            vedioId.value, state.vediosRelatedToVedioIdState, "getVediosRelatedToVedioId"
        );
        return {
            vedioDetailsLoading,
            vedioDetailsData,
            vedioDetailsError,
            vediosLoading,
            vediosData,
            vediosError
        };
    },
    components: { VedioWatch, VedioCard }
})
</script>

<template>
    <div class="vedioDetails">
        <div class="row">
            <div class="col-xs-12 col-lg-9">
                <VedioWatch
                    :loading="vedioDetailsLoading"
                    :error="vedioDetailsError"
                    :data="vedioDetailsData"
                />
            </div>
            <div class="col-xs-12 col-lg-3">
                <div class="container">
                    <div class="row vedios">
                        <template v-if="vediosData">
                            <template v-for="item in vediosData" :key="item">
                                <div class="col-xs-12">
                                    <VedioCard :item="item"/>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    