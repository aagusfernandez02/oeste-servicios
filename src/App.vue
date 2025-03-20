<script setup>
import Home from '@/components/Home.vue';
import Servicios from '@/components/Servicios.vue';
import Nosotros from '@/components/Nosotros.vue';
</script>

<template>
  <main>
    <Home />
    <Servicios />
    <Nosotros />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
</style>
