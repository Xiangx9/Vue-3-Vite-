<template>
    Parent {{ addCount }}
    <br>
    <Child :count="count" @child-click="add"></Child>
    <br>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Child from '@/views/Child/index.vue'
//父传子
const count = ref(1)

//子传子
const addCount=ref()
const add=(value)=>{
    addCount.value =value
}
onMounted(() => {

})
</script>

<style lang="" scoped>

</style>