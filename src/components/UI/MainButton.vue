<template>
    <button class="main-btn inter-regular">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "main-button"
}
</script>

<style scoped>
.main-btn{
    background: grey;
    color: white;
    border-radius: 40px;
}
</style>