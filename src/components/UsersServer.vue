<template>
    <div class="block-users">
        <div class="users-container" >
            <user-item v-for="user in sortedUsers" :key="user.id" :user="user" ></user-item>
        </div>
        <my-button v-show="totalUsers > arrayUsersLength" @click = "ShowMoreUsers" >Show more</my-button>
    </div>
</template>


<script>
import UserItem from "./UserItem.vue"

export default {
    name: "UsersServer",
    components: { UserItem },

  computed : {
    sortedUsers(){
        return this.$store.getters.sortedUsers
    },
   
   arrayUsersLength (){
    return this.$store.state.users.users.length
   },
   totalUsers(){
     return this.$store.state.users.total_users
   }
    
  },

   methods : {
    ShowMoreUsers() {
      this.$store.dispatch("getMoreUsers")
    }
   },
  mounted(){
    this.$store.dispatch('getUsers')
  }

}

</script>

<style scoped >
.block-users {
  max-width: 904px;
  margin: 50px auto 10px;
}
.users-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(282px, 1fr));
  grid-auto-rows: 254px;
  grid-gap: 28px;
  margin-bottom: 50px

}
</style>