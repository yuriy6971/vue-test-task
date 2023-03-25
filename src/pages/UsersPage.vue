<template>
    <div class="usersPage-container">

        <div class="block-info">
            <h1>Working with GET request</h1>
            <my-loader v-show="$store.state.users.isLoaderVisible" class="loader" />
        </div>
        <users-server></users-server>

    </div>
</template>

<script>

import UsersServer from "../components/UsersServer.vue"

export default {
    name: "UsersPage",
    components: {
        UsersServer
    },

}
</script>


<style scoped >
.usersPage-container {
    /* position: relative; */
    padding-top: 130px;
}

.usersPage-container h1 {
    font-size: 2.3rem;

}
.block-info {
    position: relative;
}
.loader {
    position: fixed;
    left: 650px;
    
}
</style>