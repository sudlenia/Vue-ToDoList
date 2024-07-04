<template>
    <div class="task-input inter-semi-bold">
        <input class="task-input__input" type="search" placeholder="Название новой задачи">
        <main-button class="task-input__btn">Добавить</main-button>
    </div>
</template>

<script>
export default {
    name: "task-input",
}
</script>

<style scoped>
.task-input {
    border: 1px solid #ECEEF5;
    border-radius: 14px;
    padding: 6px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}

.task-input__btn {
    font-size: 12px;
    padding: 4px 12px;
}
</style>