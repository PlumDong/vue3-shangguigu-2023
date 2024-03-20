<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">＋</button>
    <button @click="reduce">-</button>

  </div>
</template>
<script lang="ts" name='Person11' setup>
import {onMounted, ref} from "vue";

let sum = ref(1)
let n = ref(1)

function add() {
  sum.value += n.value
}

function reduce() {
  sum.value -= n.value
}

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

img {
  width: 100px;
  margin-right: 10px;
}
</style>
