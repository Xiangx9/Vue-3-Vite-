<script setup>


</script>

<template>
  <keep-alive>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition">
        <component :is="Component" />
      </transition>
    </router-view>
  </keep-alive>
</template>

<style scoped></style>
