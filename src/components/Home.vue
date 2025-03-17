<script setup>
import bgImage1 from "@/assets/images/Home/bg-image-1.jpg";
</script>

<template>
  <section id="homeSection">
    <div class="overlay" />
    <div>
      <h1>Oeste servicios</h1>
      <h2>- Reparaciones, mantenimiento y auxilios -</h2>
    </div>
    <v-btn prepend-icon="mdi mdi-whatsapp" variant="outlined">
      Contactanos
    </v-btn>
  </section>
</template>

<style scoped lang="scss">
#homeSection {
  width: 100%;
  height: 25vh;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-image: url("@/assets/images/Home/bg-image-1.jpg");
  background-size: cover;

  color: $color-white;
  text-align: center;
  
  div {
    z-index: 1;
  }

  h1 {
    font-size: 2rem;
    z-index: 1;
  }
  
  h2 {
    font-size: 1.25rem;
    z-index: 1;
    font-weight: lighter;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $color-blue-2, $alpha: 0.5);
    backdrop-filter: blur(2px);
    z-index: 0;
  }
}
</style>