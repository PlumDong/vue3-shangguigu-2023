import {createApp} from 'vue'
// @ts-ignore
import App from './App.vue'
import router from "@/router";
import {createPinia} from "pinia";

// createApp(App).use(router).use(createPinia()).mount('#app')
createApp(App).mount('#app')
