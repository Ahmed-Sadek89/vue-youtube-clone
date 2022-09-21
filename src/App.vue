<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';
import Navbar from './components/Navbar/Navbar.vue'

export default defineComponent({
  name: "App",
  setup() {
    const { state, dispatch } = useStore();

    const categorySelected = computed(() => {
      return state.categoryName
    });
    
    dispatch('homeVediosAction', categorySelected.value)

    return {}
  },
  components: { Navbar }
})
</script>

<style>
  #app{
    width: 100%;
    overflow: hidden;
  }
</style>