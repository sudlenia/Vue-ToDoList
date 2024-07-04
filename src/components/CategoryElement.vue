<template>
    <article class="category">
        <img class="category__icon" :src="category.icon">
        <div class="category__info">
            <p class="category__name">{{ category.name }}</p>
            <p class="category__text inter-regular">{{ category.text }}</p>
        </div>
        <category-button class="category__btn"></category-button>
    </article>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.category {
    width: 100%;
    display: flex;
    padding: 18px;
    border-radius: 20px;
    gap: 20px;
}

.category--active {
    background-color: #C2B6FF;
}

.category__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 14px;
}

.category__name {
    font-weight: 700;
    flex-wrap: wrap;
}

.category__btn {
    margin-left: auto;
}
</style>