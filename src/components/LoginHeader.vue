<template>
    <header class="login-header">
        <h1 class="login-header__title inter-semi-bold">{{ headerTitle }}</h1>
        <p class="login-header__text inter-regular">{{ headerText }}</p>
    </header>
</template>

<script>
export default {
    props: {
        headerTitle: {
            type: String,
            required: true,
        },
        headerText: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped>

.login-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.login-header__title,
.login-header__text {
    text-align: center;
}

.login-header__title {
    font-size: 20px;
}

.login-header__text {
    line-height: 28px;
    color: #4B5563;
}
</style>