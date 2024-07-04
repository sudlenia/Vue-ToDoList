<template>
    <login-wrapper :headerTitle="'Забыли пароль'"
        :headerText="'Введите адрес электронной почты, который вы указали ранее, и вам будет отправлено электронное письмо'"
        :buttonName="'Отправить'" :loginText="'Вы помните пароль?'" :loginLink="'Войдите!'"
        :loginRoute="'/auth'">
        <login-input :title="'Email'" :type="'email'"></login-input>
    </login-wrapper>
</template>

<script>
import LoginWrapper from "@/components/LoginWrapper.vue";

export default {
    components: { LoginWrapper, }
}
</script>

<style>

</style>