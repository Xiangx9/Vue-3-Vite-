<template>
  123
</template>
<script setup>
import { onMounted } from 'vue'
import { Login } from '../api/api'
onMounted(() => {
  const pram = {
    user_name: "xx",
    password: '123456'
  }
  Login.register(pram)
})
</script>
<style scoped>
</style>
