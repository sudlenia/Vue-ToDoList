<template>
    <div class="deadline">
        <img class="deadline__clock" :src="icons.clock" />
        <p class="deadline__date inter-medium"><span class="deadline__date--orange">Deadline: </span>{{ deadline }}</p>
    </div>
</template>

<script>
import icons from "@/components/UI/icons.js";

export default {
    data() {
        return {
            icons: icons,
        }
    },
    props: {
        deadline: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.deadline {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
}

.deadline__clock {
    stroke: orange;
}

.deadline__date {
    color: grey;
}

.deadline__date--orange {
    color: orange;
}
</style>