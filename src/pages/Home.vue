<template>
  <div>

    <h1>Welcome to Home Page</h1>
  </div>
</template>

<script  setup lang="ts">

import {onMounted} from "vue";
import {useRouter} from "vue-router";
let router = useRouter();
onMounted(()=>{
  setTimeout(()=>{
    //在此处让路由实现跳转
    router.push('/about')
  },3000)
})

</script>

<style scoped>
/* 在这里编写样式 */
</style>
