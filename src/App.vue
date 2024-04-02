<template>
  <div>
    <h2>{{ msg }}</h2>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts" setup>
import useMsgRef from "@/hooks/useMsgRef";
let {msg} = useMsgRef('你好！', 1000);


</script>

<style scoped>

</style>
