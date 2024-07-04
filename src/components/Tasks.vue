<template>
    <section class="tasks">
        <div class="tasks__header"></div>
        <div class="tasks-list">
            <div class="tasks-list__header">
                <div class="search">
                    <h2 class="search__title">Задачи</h2>
                    <div class="search__input">
                        <search-input></search-input>
                        <img :src="icons.search">
                    </div>
                </div>
                <task-input></task-input>
            </div>
            <list class="list">
                <task-element v-for="task in list" :key="task.id" :task="task"></task-element>
            </list>
        </div>
    </section>
</template>

<script>
import TaskElement from "@/components/TaskElement";
import icons from "@/components/UI/icons.js";

export default {
    data() {
        return {
            icons: icons,
        }
    },
    components: { TaskElement },
    props: {
        list: {
            type: Array,
            required: true,
        },
    }
}
</script>

<style scoped>
.tasks {
    background: rgb(251, 250, 255, 0.4);
    width: 100%;
    max-width: 470px;
    display: flex;
    flex-direction: column;
}

.tasks__header {
    display: flex;
    min-height: 84px;
    border-bottom: 2px solid #ECEEF5;
    align-items: center;
    padding: 20px;
}


.search {
    display: flex;
    justify-content: space-between;
}

.search__title {
    font-size: 18px;
}

.search__input {
    display: flex;
    align-items: center;
    text-align: right;
    gap: 10px;
}

::-webkit-input-placeholder {
    text-align: right;
}

.tasks-list {
    border-right: 1px solid #ECEEF5;
    gap: 8px;
    padding: 56px 0 10px 0;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 88px);
}

.tasks-list__header {
    padding: 0 16px;
    gap: 18px;
    display: flex;
    flex-direction: column;
}

.list {
    gap: 8px;
    scrollbar-color: #ECEEF5 rgb(251, 250, 255, 0.4);
    padding: 0 0 0 16px;
}
</style>