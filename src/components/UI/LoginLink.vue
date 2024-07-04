<template>
    <a class="login-link"></a>
    <router-link class="login-link" :to="route">{{ link }}</router-link>
</template>

<script>
export default {
    name: "login-link",
    props: {
        link: {
            type: String,
            required: false,
            default: ""
        },
        route: {
            type: String,
            required: false,
            default: ""
        },
    }
}
</script>

<style scoped>
.login-link {
    font-size: 14px;
    color: #7258FF;
}
</style>