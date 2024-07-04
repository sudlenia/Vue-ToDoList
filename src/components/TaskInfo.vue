<template>
    <section class="task-info" v-if="isShowBlock">
        <h2 class="task-info__name">{{ task.name }}</h2>
        <deadline :deadline="task.deadline"></deadline>
        <div class="task-info__btns">
            <task-info-button :icon="icons.reload">Повторить</task-info-button>
            <task-info-button :icon="icons.bell">Напомнить</task-info-button>
            <task-info-button :icon="icons.calendar">Изменить дедлайн</task-info-button>
            <task-info-button :icon="icons.category">Выбрать категорию</task-info-button>
        </div>
        <div class="task-description">
            <h4 class="task-description__title">Описание</h4>
            <textarea class="task-description__text inter-regular" name="description" id="description"></textarea>
        </div>
        <div class="task-info__functional-btns">
            <main-button class="btn__save">Сохранить</main-button>
            <button class="btn__del"><img  :src="icons.trash"></button>
        </div>
    </section>
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
            required: false,
            default: {},
        },
        isShowBlock: {
            type: Boolean,
            required: true,
        },
    },
    components: {
        Deadline,
    }
}
</script>

<style scoped>
.task-info {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 430px;
    width: 100%;
    max-height: 656px;
    height: 100%;
    margin: auto;
}

.task-info__name {
    font-size: 18px;
}

.task-info__btns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
}

.task-description__text {
    font-size: 16px;
    border-radius: 12px;
    padding: 14px 10px;
    resize: none;
    width: 100%;
    height: 200px;
}

.task-info__functional-btns {
    display: flex;
    align-items: center;
    gap: 6px;
    justify-content: flex-end;
    margin-top: auto;
}

.btn__save {
    padding: 6px 10px;
}

</style>