<template>
    <nav-bar></nav-bar>
    <categories :list="categories"></categories>
    <tasks :list="tasks"></tasks>
    <div class="other">
        <my-header></my-header>
        <task-info :isShowBlock="isShowTaskInfo" :task="task"></task-info>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import MyHeader from "@/components/MyHeader";
import Categories from "@/components/Categories";
import Tasks from "@/components/Tasks";
import TaskInfo from "@/components/TaskInfo";
import icons from "@/components/UI/icons.js";

export default {
    data() {
        return {
            categories: [
                { id: 0, icon: icons.award, name: 'Работа', text: "Задачи по работе" },
                { id: 1, icon: icons.award, name: 'Работа', text: "Задачи по работе" },
                { id: 2, icon: icons.award, name: 'Работа', text: "Задачи по работе" },
                { id: 3, icon: icons.award, name: 'Работа', text: "Задачи по работе" },
            ],
            tasks: [
                { id: 0, name: 'Работа', deadline: "23 April, 2025", category: "Работа", status: "Создана" },
                { id: 1, name: 'Работа', deadline: "23 April, 2025", category: "Работа", status: "Создана" },
                { id: 2, name: 'Работа', deadline: "23 April, 2025", category: "Работа", status: "Создана" },
                { id: 3, name: 'Работа', deadline: "23 April, 2025", category: "Работа", status: "Создана" },
            ],
            task: {
                id: 0, name: 'Работа', deadline: "23 April, 2025", category: "Работа", status: "Создана",
            },
            isShowTaskInfo: false,
        }
    },
    components: {
        NavBar, MyHeader, Categories, Tasks, TaskInfo,
    },
}
</script>

<style scoped>
.other {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>