<template>
    <button class="nav-button" @click="$router.push(route)">
        <img :src="svg" />
        <p class="nav-button__text">{{ text }}</p>
    </button>
</template>

<script>
export default {
    name: "nav-button",
    props: {
        svg: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        route: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
.nav-button {
    padding: 10px 0;
}
.nav-button__text {
    font-size: 10px;
    color: #6c7599;
}

</style>
  