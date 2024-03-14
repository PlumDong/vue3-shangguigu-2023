<template>
    <Person ref="ren"></Person>
</template>


<script lang="ts" setup name="App">
import Person from "@/components/Person.vue";
import {ref} from "vue";
let ren = ref()

console.log(ren)


</script>
