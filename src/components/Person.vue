<template>
  <div class="person">
    <h2>当前求和为：{{sum}}</h2>
    <button @click="setSum">点我+1</button>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {ref, watch} from "vue";

let sum = ref(0)
function setSum() {
    sum.value += 1
}

let stopWatch = watch(sum,(newValue, oldValue)=>{
    console.log('sum旧值',oldValue,'    新值',newValue)
    if (newValue>=10){
        stopWatch()
    }
})


</script>
<style scoped>

.person {
  background-color: chocolate;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
