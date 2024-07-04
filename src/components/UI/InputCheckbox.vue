<template>
    <input class="input-checkbox__input" type="checkbox" id="remember" name="remember" />
    <label class="input-checkbox__label" for="remember">{{ label }}</label>
</template>

<script>
export default {
    name: "input-checkbox",
    props: {
        label: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>

.input-checkbox__input {
    position: absolute;
    opacity: 0;
}

.input-checkbox__input+.input-checkbox__label {
    display: inline-flex;
    align-items: center;
}

.input-checkbox__input+.input-checkbox__label::before {
    content: '';
    width: 16px;
    height: 16px;
    border: 1px solid #adb5bd;
    border-radius: 6px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
}

.input-checkbox__input:checked+.input-checkbox__label::before {
    border-color: #7258FF;
    background-color: #7258FF;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.input-checkbox__label {
    font-size: 14px;
}
</style>