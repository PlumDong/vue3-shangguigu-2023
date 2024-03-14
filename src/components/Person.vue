<template>
  <div class="person">
???
  </div>
</template>
<script lang="ts" name='Person11' setup>
import type {PersonInter} from "@/types";

let person:PersonInter = {id:'01',name:'张三',age:18}
let personList:PersonInter[] = [
    {id:'02',name:'李四',age:20},
    {id:'03',name:'王五',age:30}
]

</script>
<style scoped>

.person {
  background-color: choco late;
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
