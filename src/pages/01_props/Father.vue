<!--<template>-->
<!--  <div class="father">-->
<!--    <h3>父组件</h3>-->
<!--		<h4>汽车：{{ car }}</h4>-->
<!--		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>-->
<!--		<Child :car="car" :sendToy="getToy"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts" name="Father">-->
<!--	import Child from './Child.vue'-->
<!--	import {ref} from 'vue'-->
<!--	// 数据-->
<!--	let car = ref('奔驰')-->
<!--	let toy = ref('')-->
<!--	// 方法-->
<!--	function getToy(value:string){-->
<!--		toy.value = value-->
<!--	}-->
<!--</script>-->
<template>
  <div class="father">
    <h2>父组件</h2>
    <h4>父组件数据汽车：{{car}}</h4>
    <h4 v-show="toy">子组件数据：{{toy}}</h4>
    <button @click="sendCar()">把车给子</button>
    <Child :car="childCar" :send-toy="getToy"></Child>
  </div>
</template>

<script lang="ts" setup name="Father">
import {ref} from "vue";
import Child from "@/pages/01_props/Child.vue";

let car = ref('奔驰')
let childCar = ref('')
let toy = ref('')
const getToy = (value:string) =>{
  toy.value = value
}

function sendCar() {
  childCar.value = car.value
}
</script>
<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>
