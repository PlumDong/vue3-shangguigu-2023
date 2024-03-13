<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<span>{{ fullName }}</span><br>
  </div>
</template>
<script lang="ts" name='Person11' setup>
import {computed, ref} from "vue";

let firstName = ref('张')
let lastName = ref('三')

let fullName = computed(()=>{
    return firstName.value + '--' + lastName.value
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
