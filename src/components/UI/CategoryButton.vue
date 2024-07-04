<template>
    <button class="category-btn">
        <img :src="icons.checklist" />
    </button>
</template>

<script>
import icons from "@/components/UI/icons.js";
export default {
    data() {
        return {
            icons: icons,
        }
    },
    name: "category-button",
}
</script>

<style scoped>

.category-btn {
    background: #FAF9FF;
    border: 2px solid #ECEEF5;
    border-radius: 10px;
    padding: 6px;
    align-self: center;
}
</style>