<template>
       <div class="block-test">
        <div class="text-container">
            <h2 className=test-title>
                Test assignment for front-end developer
            </h2>
            <p>
                What defines a good front-end developer is one that has skilled
                knowledge of HTML, CSS, JS with a vast understanding of User design
                thinking as they'll be building web interfaces with accessibility in
                mind. They should also be excited to learn, as the world of Front-End
                Development keeps evolving.
            </p>
            <div class="sign">
                <my-button @click="$router.push('/login')" >Sign Up</my-button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name : "MainPage"
}
</script>

<style scoped >
.block-test {
    width: 100%;
    height: 600px;
    background: url(../assets/images/fone_image.jpg) no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
}

.text-container {
    width: 380px;
    color: #FFFFFF;
    margin-top: 164px;
}

.test-title {
    width: inherit;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 21px;
}
.sign {
    margin-top: 40px;
}
</style>