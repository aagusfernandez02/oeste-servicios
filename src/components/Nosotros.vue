<script setup>
</script>

<template>
    <section id="nosotrosSection">
        <h3 class="title">Nosotros</h3>
        <p class="text">En <em>Servicios oeste</em>, nos especializamos en brindar <strong>soluciones mecánicas</strong> confiables y eficientes. Contamos con la experiencia y el compromiso necesario para realizar <strong>diagnósticos</strong> precisos, <strong>mantenimiento</strong> preventivo y <strong>reparaciones</strong> para todo tipo de vehículos. Nuestro objetivo es ofrecer un servicio de calidad, asegurando la seguridad y el óptimo rendimiento de tu vehículo.</p>
        <svg class="svg-wave color-white" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(48, 102, 190, 1)" offset="0%"></stop><stop stop-color="rgba(48, 102, 190, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,60L60,51.7C120,43,240,27,360,16.7C480,7,600,3,720,15C840,27,960,53,1080,60C1200,67,1320,53,1440,45C1560,37,1680,33,1800,30C1920,27,2040,23,2160,30C2280,37,2400,53,2520,63.3C2640,73,2760,77,2880,75C3000,73,3120,67,3240,58.3C3360,50,3480,40,3600,31.7C3720,23,3840,17,3960,25C4080,33,4200,57,4320,58.3C4440,60,4560,40,4680,36.7C4800,33,4920,47,5040,43.3C5160,40,5280,20,5400,25C5520,30,5640,60,5760,68.3C5880,77,6000,63,6120,60C6240,57,6360,63,6480,60C6600,57,6720,43,6840,46.7C6960,50,7080,70,7200,76.7C7320,83,7440,77,7560,76.7C7680,77,7800,83,7920,83.3C8040,83,8160,77,8280,66.7C8400,57,8520,43,8580,36.7L8640,30L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path></svg>
    </section>
</template>

<style scoped lang="scss">
#nosotrosSection {
    width: 100%;
    background: $color-white;    
    padding: 1rem;
    position: relative;
    padding-top: 2rem;
    padding-bottom: 6rem;
    
    color: $color-blue-2;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .title {
        font-size: 1.5rem;
        font-weight: bold;
    }


    .text {
        font-size: 1rem;
        font-weight: $font-weight-light;

        strong {
            font-weight: $font-weight-bold;
        }
    }

    .svg-wave {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: $color-blue-2;
    }
}
@media (min-width: 768px) {
    #nosotrosSection {
        padding-top: 5rem;
        padding-bottom: 10rem;
        .title {
            font-size: 2.5rem;
        }
    
        .text {
            font-size: 1.5rem;
        }

    }
}

@media (min-width: 1024px) { 
    #nosotrosSection {
        padding-left: 10%;
        padding-right: 10%;
    }
}
</style>