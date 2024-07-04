<template>
    <div class="list">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "list",
}
</script>

<style scoped>

.list {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}

</style>