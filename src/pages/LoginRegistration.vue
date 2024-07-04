<template>
    <login-wrapper :headerTitle="'Регистрация'" :headerText="'Это не сложно, вам просто нужно указать некоторые данные'"
        :buttonName="'Регистрация'" :loginText="'Уже зарегистрированы?'" :loginLink="'Войдите!'" :loginRoute="'/auth'"
        :loginPolitics="`Регистрируясь, вы соглашаетесь с Условиями предоставления услуг и Политикой конфиденциальности`">
        <login-input :title="'Логин'" :type="'text'"></login-input>
        <login-input :title="'Email'" :type="'email'"></login-input>
        <login-input :title="'Пароль'" :type="'email'"></login-input>
        <login-input :title="'Подтверждение пароля'" :type="'password'"></login-input>
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