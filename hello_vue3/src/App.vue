<template>
    <!--html-->
  <div class="app">
    <h1>你好！</h1>
    <Person></Person>
  </div>
</template>


<script lang="ts">
// JS或TS
  import Person from "@/components/Person.vue";

  export default {
      name:'App',    //组件名
      components:{
          Person
      }
  }
</script>

<style>

.app {
  background-color: brown;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;

}
</style>
