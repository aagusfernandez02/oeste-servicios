<script setup>
import Home from '@/components/Home.vue';
import Servicios from '@/components/Servicios.vue';
import Nosotros from '@/components/Nosotros.vue';
import Contacto from '@/components/Contacto.vue';
import { useWindowWidth } from './composables/useWindowWidth';

const {windowWidth} = useWindowWidth();
</script>

<template>
  <main>
    <Home />
    <Servicios />
    <Nosotros />
    <Contacto />
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
