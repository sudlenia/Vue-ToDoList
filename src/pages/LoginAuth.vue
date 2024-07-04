<template>
    <login-wrapper :headerTitle="'Войдите в свою учетную запись'"
        :headerText="'Получите возможность структурировать свое время с помощью Focus'" :buttonName="'Войти'"
        :loginText="'В первый раз?'" :loginLink="'Зарегистрироваться!'"
        :loginRoute="'/reg'">
        <login-input :title="'Email'" :type="'email'"></login-input>
        <login-input :title="'Пароль'" :type="'password'" :link="'Забыли пароль?'" :route="'/forgot'"></login-input>
        <input-checkbox :label="'Запомнить меня'"></input-checkbox>
    </login-wrapper>
</template>

<script>
import LoginWrapper from "@/components/LoginWrapper.vue";

export default {
    components: { LoginWrapper, }
}
</script>

<style scoped>

</style>