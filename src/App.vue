<template>
    <Person v-if="isShow"></Person>
</template>


<script lang="ts" setup name="App">
import Person from "@/components/Person.vue";
import type {PersonInter} from "@/types";
import {onBeforeMount, onMounted, ref} from "vue";

let isShow = ref(true)
// 创建
console.log('父创建')

//挂载前
onBeforeMount(()=>{
  console.log('父挂载前')
})
//挂载完毕
onMounted(()=>{
  console.log('父挂载完毕')
})


</script>
