<script lang="ts">
import { categories } from '@/assets/utils/Constant';
import { category } from '@/types/Category';
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: "Sidebar",
    props: {
        link: {
            type: Object as PropType<category>
        },
        categorySelected: {
            required: true,
            type: String
        }
    },
    emits: ['categoryEvent'],
    setup (props, { emit }) {
        const handleCategoryEvent = (newCategory: string) => {
            emit('categoryEvent', newCategory)
        }
        return { 
            categories, 
            handleCategoryEvent
        }
    }
})
</script>

<template>
    <div class="sidebar">
            <div class="sidebar-main">
                <template 
                    v-for="link in categories"
                    :key="link.id"
                >
                    <!-- if there is a selected category -->
                    <template
                        v-if="categorySelected === link.name"
                    >
                        <div
                            class="sidebar-main-link-active"
                        >
                            <i :class="`${link.icon}`"></i>
                            <span>{{link.name}}</span>
                        </div>
                    </template>

                    <!-- else if not! -->
                    <template v-else>
                        <div
                            class="sidebar-main-link"
                            @click="handleCategoryEvent(link.name)"
                        >
                            <i :class="`${link.icon}`"></i>
                            <span>{{link.name}}</span>
                        </div>  
                    </template>
                    
                </template>
            </div>
            <div class="sidebar-footer">
                <h4>© 2022 Copyright All Right Reserved</h4>
                <a href="https://ahmed-sadek89.github.io/s-a-d-e-k/" target="_blank">
                    Ahmed Sadek
                </a>
            </div> 
    </div>
</template>
