<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Menubar from '@/components/Menubar/Menubar.vue';
import { useStore } from 'vuex';

export default defineComponent({
    name: "Home",
    setup() {
        // vuex
        const { dispatch, state, commit } = useStore()
        
        // computed values
        const categorySelected = computed(() => {
            return state.categoryName
        });

        const loading = computed(() : boolean => {
            return state.homeVediosState.loading
        })

        const data = computed(() : any[] => {
            return state.homeVediosState.data
        })

        const error = computed(() : boolean => {
            return state.homeVediosState.error
        })

        const changeCategorySetectedAndFetch = async (newCategory: string) => {
            // 1- change the category name in the state
            commit('categorynameMutation', newCategory);
            // 2- dispatch the api according to cat_name
            dispatch('homeVediosAction', categorySelected.value)
        }
        return {
            categorySelected,
            changeCategorySetectedAndFetch,
            loading, data, error
        };
    },
    components: { Sidebar, Menubar }
})
</script>

<template>
    <div class="home">
        <div class="row home-content">
            <div class="col-xs-12 col-md-3">
                <Sidebar 
                    :categorySelected="categorySelected"
                    @categoryEvent="changeCategorySetectedAndFetch"
                />
            </div>
            <div class="col-xs-12 col-md-9">
                <Menubar
                    :categorySelected="categorySelected"
                    :loading="loading"
                    :error="error"
                    :data="data"
                />
            </div>
        </div>
    </div>
</template>
