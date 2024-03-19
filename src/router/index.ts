// 创建一个路由器，并暴露出去
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
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
    history: createWebHashHistory(),    // 路由器的工作模式
    routes                          // 路由规则
});
// history 模式  history: createWebHashHistory()   toC项目常用，例如b站，优点：没有#号，缺点：nginx 需要配置 try_files
// hash 模式  history: createWebHashHistory()      后台管理项目常用，优点：稳定性好，缺点：路径带有井号，
export default router;
