<template>
  <div class="app">
    <Header></Header>
    <div class="navigate">
      <RouterLink to="/home" active-class="active"> 首页 </RouterLink>
      <RouterLink to="/about" active-class="active"> 关于 </RouterLink>
      <RouterLink :to="{path:'/mine'}" active-class="active"> 我的 </RouterLink>
    </div>
    <div class="main-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script lang="ts" setup name="App">




import Header from "@/components/Header.vue";
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navigate {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.navigate a {
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
}

.navigate a:hover {
  background-color: #e0e0e0;
}

.main-content {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.active {
  font-weight: bold;
  color: #ffd500;
}
</style>
