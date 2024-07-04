import Main from "@/pages/Main.vue";
import LoginAuth from "@/pages/LoginAuth.vue";
import LoginReset from "@/pages/LoginReset.vue";
import LoginRegistration from "@/pages/LoginRegistration.vue";
import Achievments from "@/pages/Achievments.vue";
import LoginForgot from "@/pages/LoginForgot.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/auth",
        component: LoginAuth
    },
    {
        path: "/reset",
        component: LoginReset
    },
    {
        path: "/reg",
        component: LoginRegistration
    },
    {
        path: "/achievments",
        component: Achievments
    },
    {
        path: "/forgot",
        component: LoginForgot
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL)
})

export default router;
