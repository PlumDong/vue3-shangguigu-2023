// 创建一个路由器，并暴露出去
import { createRouter, createWebHistory } from 'vue-router';
import Mine from "@/pages/Mine.vue";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";

const routes = [
    {
        path: '/home',
        name: '首页',
        component: Home
    },
    {
        path: '/about',
        name: '关于',
        component: About
    },
    {
        path: '/mine',
        name: '我的',
        component: Mine
    },
];

const router = createRouter({
    history: createWebHistory(),    // 路由器的工作模式
    routes                          // 路由规则
});

export default router;
