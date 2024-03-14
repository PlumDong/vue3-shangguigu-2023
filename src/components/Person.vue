<template>
  <div class="person">
  <ul>
    <li v-for="item in list" :key="item.id">{{item.name}} -- {{item.age}}</li>
  </ul>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import type {PersonInter} from "@/types";

// 接受list参数 + 限制类型 + 限制必要性 + 指定默认值
let {list} = withDefaults(defineProps<{list?:PersonInter[]}>(), {
    list:()=>[
        {id:'99',name:'王麻子',age:50}
    ]
})
console.log(list)
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
