<template>
  <input
    type="text"
    :value="modelValue.username"
    @input="(e)=>{
      modelValue.username = (<HTMLInputElement>e.target).value
      emit('update:modelValue',modelValue)
    }"  >
  <br>
  <input
    type="text"
    :value="modelValue.password"
    @input="(e)=>{
      modelValue.password = (<HTMLInputElement>e.target).value
      emit('update:modelValue',modelValue)
    }"
  >
</template>

<script setup lang="ts" name="AtguiguInput">
  let {modelValue} = defineProps(['modelValue']);
  const emit = defineEmits(['update:modelValue'])
  console.log(modelValue)
</script>

<style scoped>
  input {
    border: 2px solid black;
    background-image: linear-gradient(45deg,red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
  }
</style>
