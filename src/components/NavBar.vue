<template>
    <nav class="nav-bar">
        <img class="nav-bar__logo" src="@/assets/images/logo.png" width="32" height="32">
        <div class="nav-bar__btns">
            <nav-button v-for="button in buttons" :svg="button.svg" :text="button.text"
                :route="button.route"></nav-button>
        </div>
    </nav>
</template>

<script>
import icons from "@/components/UI/icons.js";

export default {
    data() {
        return {
            buttons: [
                { svg: icons.checklist, text: 'Задачи', route: "/" },
                { svg: icons.award, text: 'Достижения', route: "/achievments" },
            ],
        }
    }
}
</script>

<style scoped>
.nav-bar {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 10px 14px;
}

.nav-bar__logo {
    align-self: center;
}

.nav-bar__btns {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    margin: auto 0px;
}
</style>