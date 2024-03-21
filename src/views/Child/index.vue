<template>
    Child {{ propsData.count }}<br>
    <button @click="add()">+1</button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
//父传子
const propsData = defineProps({
    count: Number
})
console.log(propsData);

//子传子
let addCount = 1
const emit = defineEmits(['child-click'])
const add = () => {
    addCount += 1
    emit('child-click', addCount)
}
</script>

<style lang="" scoped>

</style>