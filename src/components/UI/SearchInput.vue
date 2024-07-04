<template>
    <input class="search-input" type="search" placeholder="Название">
</template>

<script>
export default {
    name: "search-input",
    data() {
        return {
            searchText: "",
        }
    }
}
</script>

<style scoped>

.search-input {
    all: unset;
    font-size: 14px;
}

.search-input[type="search"]::-webkit-input-placeholder {
    color:#8083A3;
}

.search-input[type="search"]::-webkit-search-cancel-button {
    display: none;
}
</style>