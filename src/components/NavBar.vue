<template>
    <div class="block-navbar" >
      <div class="head-logo" @click="$router.push('/')" >
        <img src="../assets/images/Logo.svg" alt="logo">
      </div>
      <div class="block-buttons">
        <my-button @click="$router.push('/users')">Users</my-button>
        <my-button @click="$router.push('/login')">Sign Up</my-button>
      </div>
      <my-loader class="loader" v-show="isLoaderVisible" />
    </div>
</template>

<script>

export default {
    name : "NavBar",
   
    computed : {
    isLoaderVisible(){
        return this.$store.getters.isLoaderVisible
    }
}
}

</script>


<style scoped >
 .block-navbar {
    position: fixed; 
    width: 1020px;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 45px;
    margin-bottom: 75px;
 }

 .head-logo {
  cursor: pointer;
 }
 .block-buttons :first-child {
  margin-right: 10px;
 }

 .loader {
    position: absolute;
  
    right: 500px;
}
</style>