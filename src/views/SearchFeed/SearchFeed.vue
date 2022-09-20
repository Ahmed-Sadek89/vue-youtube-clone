<script lang="ts">
import { defineComponent, computed } from 'vue'
import Menubar from '@/components/Menubar/Menubar.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
    
    export default defineComponent({
    setup() {
        // vuex
        const { state } = useStore();

        
        // computed values
        const route = useRoute();
        const { dispatch } = useStore();
        
        const searchTerm = computed(() => {
            return route.params.search_term;
        });
        
        const loading = computed(() : boolean => {
            return state.searchResultState.loading
        })

        const data = computed(() : any[] => {
            return state.searchResultState.data
        })

        const error = computed(() : boolean => {
            return state.searchResultState.error
        })
        if ( searchTerm.value !== '' ) {
            dispatch('searchResultAction', searchTerm.value)
        }
        return { loading, data, error};
    },
    components: { Menubar }
})
    </script>
    
    <template>
        <div class="searchFeed">
            <Menubar 
                page="searchfeed"
                :loading="loading"
                :error="error"
                :data="data"
            />
        </div>
    </template>
    