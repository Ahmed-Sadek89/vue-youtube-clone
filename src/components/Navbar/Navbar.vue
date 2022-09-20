<script lang="ts">
import { logo } from '@/assets/utils/Constant';
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
    name: "Navbar",
    setup () {
        const router = useRouter();
        
        const handleSubmit = () => { console.log('searching...') }
        return { 
            router,
            logo,
            handleSubmit
        }
    }
})
</script>

<template>
    <nav class="navbar navbar-expand-sm dark-navbar shadow-sm">
        <div class="container">
            <span
                class="navbar-brand brand"
                @click="router.push({name: 'Home'})"
                title="youtube clone"
            >
                <img
                    :src="`${logo}`" 
                    alt="logo" 
                    width="30"
                    height="24" 
                />
            </span>
            <button
                class="navbar-toggler bg-light" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#youtube_nav" 
            >
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="youtube_nav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                </ul>
                <form class="d-flex" @submit.prevent="handleSubmit">
                    <input class="form-control me-2" type="search" placeholder="Search">
                    <button class="btn searchBtn" type="submit">Search</button>
                </form>
            </div>
        </div>
      </nav>
</template>