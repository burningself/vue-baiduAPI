import bdmap from "../components/map/map.vue"
import second from "../components/second/second.vue"
import third from "../components/third/third.vue"
import fourth from "../components/fourth/fourth.vue"
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter({
    routes: [
        { path: '/fir', component: bdmap },
        { path: '/second', component: second },
        { path: '/third', component: third },
        { path: '/fourth', component: fourth }
    ]
})
export default router