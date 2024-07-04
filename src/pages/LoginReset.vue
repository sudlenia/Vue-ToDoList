<template>
    <login-wrapper :headerTitle="'Сброс пароля'"
        :headerText="'Установите пароль, который Вы не забудете'"
        :buttonName="'Установить пароль'">
        <login-input :title="'Пароль'" :type="'password'"></login-input>
        <login-input :title="'Подтверждение пароля'" :type="'password'"></login-input>
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