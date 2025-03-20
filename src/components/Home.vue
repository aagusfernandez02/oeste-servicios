<script setup>
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
    <!-- <svg class="svg-wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3000BE" fill-opacity="1" d="M0,160L34.3,160C68.6,160,137,160,206,149.3C274.3,139,343,117,411,122.7C480,128,549,160,617,176C685.7,192,754,192,823,170.7C891.4,149,960,107,1029,106.7C1097.1,107,1166,149,1234,160C1302.9,171,1371,149,1406,138.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> -->
    <svg class="svg-wave color-blue-2" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(243, 106, 62, 1)" offset="0%"></stop><stop stop-color="rgba(255, 179, 11, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,10L34.3,10C68.6,10,137,10,206,20C274.3,30,343,50,411,63.3C480,77,549,83,617,85C685.7,87,754,83,823,78.3C891.4,73,960,67,1029,56.7C1097.1,47,1166,33,1234,35C1302.9,37,1371,53,1440,63.3C1508.6,73,1577,77,1646,70C1714.3,63,1783,47,1851,36.7C1920,27,1989,23,2057,20C2125.7,17,2194,13,2263,18.3C2331.4,23,2400,37,2469,40C2537.1,43,2606,37,2674,28.3C2742.9,20,2811,10,2880,10C2948.6,10,3017,20,3086,23.3C3154.3,27,3223,23,3291,20C3360,17,3429,13,3497,16.7C3565.7,20,3634,30,3703,31.7C3771.4,33,3840,27,3909,35C3977.1,43,4046,67,4114,70C4182.9,73,4251,57,4320,56.7C4388.6,57,4457,73,4526,66.7C4594.3,60,4663,30,4731,15C4800,0,4869,0,4903,0L4937.1,0L4937.1,100L4902.9,100C4868.6,100,4800,100,4731,100C4662.9,100,4594,100,4526,100C4457.1,100,4389,100,4320,100C4251.4,100,4183,100,4114,100C4045.7,100,3977,100,3909,100C3840,100,3771,100,3703,100C3634.3,100,3566,100,3497,100C3428.6,100,3360,100,3291,100C3222.9,100,3154,100,3086,100C3017.1,100,2949,100,2880,100C2811.4,100,2743,100,2674,100C2605.7,100,2537,100,2469,100C2400,100,2331,100,2263,100C2194.3,100,2126,100,2057,100C1988.6,100,1920,100,1851,100C1782.9,100,1714,100,1646,100C1577.1,100,1509,100,1440,100C1371.4,100,1303,100,1234,100C1165.7,100,1097,100,1029,100C960,100,891,100,823,100C754.3,100,686,100,617,100C548.6,100,480,100,411,100C342.9,100,274,100,206,100C137.1,100,69,100,34,100L0,100Z"></path></svg>
  </section>
</template>

<style scoped lang="scss">
#homeSection {
  width: 100%;
  height: 25vh;
  padding-bottom: 1rem;

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
  
  
  h1 {
    font-size: 1.75rem;
    z-index: 1;
  }
  
  h2 {
    font-size: 1.15rem;
    z-index: 1;
    font-weight: $font-weight-light;
  }

  .svg-wave {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: $color-blue-2, $alpha: 0.65);
    backdrop-filter: blur(1px);
    z-index: 0;
  }
  div {
    z-index: 1;
  }
}
</style>