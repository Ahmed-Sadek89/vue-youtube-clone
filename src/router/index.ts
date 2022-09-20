import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import VedioDetails from '@/views/VedioDetails/VedioDetails.vue'
import ChannelDetails from '@/views/ChannelDetails/ChannelDetails.vue'
import SearchFeed from '@/views/SearchFeed/SearchFeed.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: "/vedio/:id",
    name: "VideoDetails",
    component: VedioDetails
  },
  {
    path: "/channel/:id",
    name: "ChannelDetails",
    component: ChannelDetails
  },
  {
    path: '/search/:search_term',
    name: "SearchFeed",
    component: SearchFeed
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
