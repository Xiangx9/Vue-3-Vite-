<template>
  <HelloWorld></HelloWorld>
  {{ counter.count }}
  {{ counter.doubleCount }}
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import useCounterStore from '@/store/counter.js'
const counter = useCounterStore()
</script>

<style scope>

</style>