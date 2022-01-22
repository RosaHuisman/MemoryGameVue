import Vue from 'vue'
import VueRouter from 'vue-router'
import MemoryGame from '../views/MemoryGame.vue'
import AllScores from '../views/AllScores.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MemoryGame',
    component: MemoryGame
  },
  {
    path: '/allscores',
    name: 'AllScores',
    component: AllScores
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
