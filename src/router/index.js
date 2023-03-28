import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import ('@/views/home.vue')
  },{
    path: '/404',
    name: "404",
    component: () => import ('@/views/404.vue')
  },{
    path: '/game',
    name: "game",
    component: () => import ('@/views/game.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  }
})
 
router.beforeEach((to, from, next) =>{
  if(to.matched.length === 0){
    from.path? next({path: from.path}) : next('/404');
  }else{
    next();
  }
})
 
export default router
