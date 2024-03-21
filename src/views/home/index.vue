<template>
  <HelloWorld></HelloWorld>
  <br>--------------------------------------------------<br>
  pinia {{ counter.count }} {{ counter.doubleCount }}
  <br>---------------------------------------------------<br>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import useCounterStore from '@/store/counter.js'
//pinia
const counter = useCounterStore()

</script>

<style scope></style>