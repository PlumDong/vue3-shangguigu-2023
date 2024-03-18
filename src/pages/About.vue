<template>
  <div>
    <h1>About Us</h1>
    <p>This is the About page content.</p>
  </div>
</template>

<script  setup lang="ts">
import {onMounted, onUnmounted} from "vue";

onMounted(()=>{
  console.log('About组件挂载了')
})

onUnmounted(()=>{
  console.log('About组件卸载了')
})



</script>

<style scoped>
/* 在这里编写样式 */
</style>
