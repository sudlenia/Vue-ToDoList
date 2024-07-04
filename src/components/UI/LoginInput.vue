<template>
    <div class="login-input inter-regular">
        <header class="login-input__header inter-regular">
            <label class="login-input__title" :for="title">{{ title }}</label>
            <login-link :route="route" :link="link"></login-link>
        </header>
        <input class="login-input__input" :type="type" :id="title" :name="title">
    </div>
</template>

<script>
export default {
    name: "login-input",
    props: {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
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
.login-input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.login-input__header {
    display: flex;
    justify-content: space-between;
}

.login-input__title {
    font-size: 14px;
}

.login-input__input {
    background-color: #F3F4F6;
    padding: 12px 20px;
    box-sizing: border-box;
    width: 100%;
    border-radius: 8px;
}

</style>