<script lang="ts">
import { pageNotFound } from '@/assets/utils/Constant';
import { defineComponent } from 'vue'

export default defineComponent({
    name: "ErrorConnection",
    setup () {
        return {window, pageNotFound}
    }
})
</script>

<template>
    <div class="channel-error">
        <img :src="`${pageNotFound}`" alt="page not found" />
        <h1>something went wrong....</h1>
        <button class="btn btn-danger" @click="window.location.reload()">
            reload the page
        </button>
    </div>
</template>
