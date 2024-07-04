<template>
    <button class="login-button">
        {{ buttonName }}
    </button>
</template>

<script>
export default {
    name: "login-button",
    props: {
        buttonName: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.login-button {
    width: 100%;
    padding: 25px 0;
    background-color: #A99AFF;
    color: white;
    border-radius: 6px;
}
</style>