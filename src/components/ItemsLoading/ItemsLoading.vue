<script lang="ts">
import { defineComponent } from 'vue'
import { loop } from '@/assets/utils/Constant';

export default defineComponent({
    setup () {
        // const loop = [1,2,3,4,5,6,7,8, 9, 10, 11, 12, 13, 14, 15, 16]
        return {
            loop
        }
    }
})
</script>

<template>
    <div class="container">
        <div class="row">
            <template v-for="item in loop" :key="item">
                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="product">
                        <div className="loading image1"></div>
                        <span className="loading item-1"></span>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>