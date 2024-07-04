<template>
    <button class="task-info-btn">
        <img :src=icon>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "task-info-button",
    props: {
        icon: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.task-info-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    padding: 10px;
}
</style>