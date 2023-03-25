<template>
    <div class="user-card">
        <img class="user-photo" :src="user.photo" alt="photo_user">
        <p>{{ user.name }}</p>
        <div class="user-info" >
            <p>{{ user.phone }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.position }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserItem",

    props: {
        user: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.user-card {
    width: 282px;
    height: 254px;
    background-color: #FFFFF7;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

.user-photo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>