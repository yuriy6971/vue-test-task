<template>
    <button class="butt">
        <slot></slot>
    </button>
</template>


<script>

export default {
    name : "my-button"
}
</script>

<style scoped >
.butt {
    width: 100px;
    height: 34px;
    border-radius: 80px;
    background-color: #F4E041;
    color: #0000EE;
    cursor: pointer;
}
</style>