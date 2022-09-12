<template>
  <div class="sadek">
    <h1>Vue Youtube Clone</h1>
    <Sadek />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sadek from './components/Sadek/Sadek.vue'

export default defineComponent({
    setup() {
    },
    components: { Sadek }
})
</script>
