<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ zhanghu.username }}</h4>
    <h4>{{ zhanghu.password }}</h4>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username"> -->
    <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->

    <!-- v-model用在组件标签上 -->
    <!-- <AtguiguInput v-model="username"/> -->
    <!-- <AtguiguInput
      :modelValue="username"
      @update:modelValue="username = $event"
    /> -->

    <!-- 修改modelValue -->
    <AtguiguInput v-model="zhanghu"/>
  </div>
</template>

<script setup lang="ts" name="Father">
import {ref} from "vue";
import AtguiguInput from './AtguiguInput.vue'
// 数据
let zhanghu = ref({
  username: 'zhangsan',
  password: '123456'
})
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
