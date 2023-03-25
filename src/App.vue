<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "@/components/NavBar.vue"

export default {
  name: 'App',
  components: {
  navbar
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
}

body,
#root {
  height: 100%;
}

.app {
  width: 1020px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #E5E5E5;
  text-align: center;
}


</style>
