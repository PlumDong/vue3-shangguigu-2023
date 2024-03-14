<template>
    <Person :list2="personList"></Person>
</template>


<script lang="ts" setup name="App">
import Person from "@/components/Person.vue";
import type {PersonInter} from "@/types";

let person:PersonInter = {id:'01',name:'张三',age:18}
let personList:PersonInter[] = [
    {id:'02',name:'李四',age:20},
    {id:'03',name:'王五',age:30}
]


</script>
