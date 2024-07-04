<template>
    <div class="login-wrapper">
        <login-header :headerTitle="headerTitle" :headerText="headerText"></login-header>
        <div class="login__inputs">
            <slot></slot>
        </div>
        <p class="login__politics inter-regular">{{ loginPolitics }}</p>
        <login-button :buttonName="buttonName"></login-button>
        <p class="login__text">{{ loginText }} <login-link :link="loginLink" :route="loginRoute"></login-link></p>
    </div>
</template>

<script>
import LoginHeader from "@/components/LoginHeader";

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
        buttonName: {
            type: String,
            required: true,
        },
        loginLink: {
            type: String,
            required: false,
            default: "",
        },
        loginRoute: {
            type: String,
            required: false,
            default: "",
        },
        loginText: {
            type: String,
            required: false,
            default: "",
        },
        loginPolitics: {
            type: String,
            required: false,
            default: "",
        },
    },
    components: { LoginHeader, }
}
</script>

<style scoped>
.login-wrapper {
    max-width: 340px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: auto;
    text-align: center;
}

.login__inputs {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.login__politics {
    color: #4B5563;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
}

.login__text {
    color: #4B5563;
    font-size: 14px;
}
</style>