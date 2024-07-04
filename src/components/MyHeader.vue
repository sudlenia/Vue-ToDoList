<template>
    <header class="header">
        <div class="profile">
            <p class="profile__date inter-semi-bold">{{ getDate() }}</p>
            <img class="profile__img" src="https://koshka.top/uploads/posts/2021-12/1640025442_3-koshka-top-p-yevropeiskaya-koshka-seraya-3.jpg">
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        getDate() {
            const date = new Date();
            const months = [
                'Января', 'Февраля', 'Марта', 'Апреля',
                'Мая', 'Июня', 'Июля', 'Августа',
                'Сентября', 'Октября', 'Ноября', 'Декабря'
            ];
            return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        },
    }

}
</script>

<style scoped>
.header {
    max-height: 84px;
    width: 100%;
    border-bottom: 2px solid #ECEEF5;
    display: flex;
}

.profile {
    padding: 20px 30px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
}

.profile__date {
    color: #1C1D2280;
    opacity: 80%;
    font-weight: 600;
    align-self: center;
}

.profile__img {
    border-radius: 10px;
    width: 42px;
    height: 42px;
}
</style>