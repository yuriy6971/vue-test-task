<template>
<div class="signUp" >
    <h1>Working with <span>post</span> request</h1>
    <LoginForm />
</div>

</template>

<script>
import LoginForm from "../components/LoginForm.vue"

export default {
    name : "LoginPage",
    components : { LoginForm },


    mounted(){
        this.$store.dispatch("getPositions")
        this.$store.dispatch("getToken")
    }
}
</script>


<style scoped >


.signUp {
  padding-top: 130px;
}

.signUp h1,
span {
    font-size: 2.5rem;
    font-weight: 700;
}

.signUp span {
    text-transform: uppercase;
}

</style>