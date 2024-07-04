<template>
    <article class="task">
        <div class="task__header">
            <div class="task__name">
                <img class="task__chevron" :src="icons.chevron">
                <h3 class="task__name">{{ task.name }}</h3>
            </div>
            <p class="task__status inter-semi-bold">{{ task.status }}</p>
        </div>
        <div class="task__footer">
            <deadline :deadline="task.deadline"></deadline>
            <p class="task__category inter-semi-bold">{{ task.category }}</p>
        </div>
    </article>
</template>

<script>
import icons from "@/components/UI/icons.js";
import Deadline from "@/components/Deadline";

export default {
    data() {
        return {
            icons: icons,
        }
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    components: {
        Deadline,
    }
}
</script>

<style scoped>
.task {
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid #ECEEF5;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.task__name {
    display: flex;
    align-items: center;
    gap: 4px;
}

.task__header,
.task__footer {
    display: flex;
    align-items: center;
    font-size: 12px;
}

.task__header {
    justify-content: space-between;
}

.task__name {
    font-size: 16px;
}

.task__status {
    background-color: rgb(47, 128, 237, 0.1);
    padding: 6px 8px;
    border-radius: 12px;
}

.task__footer {
    gap: 12px;
}

.task__category {
    background-color: rgb(47, 128, 237, 0.1);
    padding: 6px 8px;
    border-radius: 12px;
}
</style>