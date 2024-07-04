<template>
    <section class="categories">
        <header class="categories__header">
            <h1 class="categories__title">Категории</h1>
            <main-button class="categories__btn inter-semi-bold">Новая категория</main-button>
        </header>
        <div class="categories__list">
            <div class="search">
                <h5 class="search__title">Поиск по категориям</h5>
                <div class="search__input">
                    <search-input></search-input>
                    <img :src="icons.search">
                </div>
            </div>
            <list class="list">
                <category-element v-for="category in list" :key="category.id" :category="category"></category-element>
            </list>
        </div>
    </section>
</template>

<script>
import CategoryElement from "@/components/CategoryElement";
import icons from "@/components/UI/icons.js";

export default {
    data() {
        return {
            icons: icons,
        }
    },
    components: { CategoryElement },
    props: {
        list: {
            type: Array,
            required: true,
        },
    }
}
</script>

<style scoped>

.categories {
    background-color: #FAF9FF;
    width: 100%;
    max-width: 430px;
    flex-shrink: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.categories__header {
    display: flex;
    min-height: 84px;
    border-bottom: 2px solid #ECEEF5;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.categories__title {
    font-size: 20px;
    font-weight: bold;
}

.categories__btn {
    padding: 12px 30px;
}

.categories__list {
    display: flex;
    flex-direction: column;
    gap: 18px;
    height: calc(100vh - 92px);
    padding-top: 32px;
    border-right: 1px solid #ECEEF5;
}

.search {
    padding: 0 26px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.search__input {
    display: flex;
    justify-content: space-between;
}

.list {
    background-color: #FAF9FF;
    padding: 0 0 0 14px;
    gap: 10px;
    scrollbar-color: rgb(108, 117, 153, 0.1) #FAF9FF;
}
</style>