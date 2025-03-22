<script setup>
import Swal from 'sweetalert2';
import Servicios_Card from './Servicios_Card.vue';
import CarouselComponent from './CarouselComponent.vue';
import { createApp } from 'vue';
import ModalServicio from './ModalServicio.vue';

// #region Imagenes
import servicios_autoelevador1_img from '@/assets/images/Servicios/Autoelevador/autoelevador1.jpg';
import servicios_autoelevador2_img from '@/assets/images/Servicios/Autoelevador/autoelevador2.jpg';
import servicios_autoelevador3_img from '@/assets/images/Servicios/Autoelevador/autoelevador3.jpg';
import { createVuetify } from 'vuetify';
// #endregion
const itemsServicios = [{
    title: "Remolques/Auxilios",
    icon: "mdi-tow-truck",
    text: "Remolques y auxilios mecánicos, tanto para autos, motos, camionetas y camiones"
},{
    title: "Vehículos",
    subtitle: "Reparación y mantenimiento",
    icon: "mdi-car-back",
    text: "Diagnóstico, reparación y mantenimiento a domicilio"
},{
    title: "Camiones",
    subtitle: "Reparación y mantenimiento",
    icon: "mdi-truck-outline",
    text: "Diagnóstico, reparación y mantenimiento de camiones y/o flotas a domicilio",
    description: "Contamos con años de experiencia en mantenimiento y reparación de flotas de camiones.",
},{
    title: "Autoelevadores",
    subtitle: "Mantenimiento preventivo",
    icon: "mdi-forklift",
    text: "Matenimiento preventivo, cambios de aciete, arreglos mecánicos",
    description: "Mantenimiento preventivo, cambios de aceite, arreglos mecánicos. Nosotros nos transportamos a donde esté tu autoelevador.",
    images: [servicios_autoelevador1_img, servicios_autoelevador2_img, servicios_autoelevador3_img]
}];

const handleClickServicio = (servicio) => {
    if( !servicio.title || !servicio.description ) {
        return;
    }
    Swal.fire({
        title: servicio.title,
        html: `<div id="swal-vue-component-container"></div>`,
        // showCancelButton: true,
        // reverseButtons: true,
        // cancelButtonText: 'VOLVER',
        confirmButtonText: 'OK',
        didOpen: ()=>{
            const container = document.getElementById("swal-vue-component-container");
            const vuetify = createVuetify();
            if(container){
                createApp(ModalServicio, {description: servicio.description, images: servicio.images}).use(vuetify).mount(container);
            }
        }
    });
}
</script>

<template>
    <section id="serviciosSection">
        <div>
            <h3 class="title">Servicios</h3>
            <p class="subtitle">Hace click en los servicios para ver más información y fotos de nuestros trabajos.</p>
        </div>
        
        <div class="services-card-container">
            <Servicios_Card 
                v-for="item in itemsServicios"
                :item="item"
                @click="handleClickServicio(item)"
            />
        </div>
        <svg class="svg-wave color-blue-2" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(48, 102, 190, 1)" offset="0%"></stop><stop stop-color="rgba(48, 102, 190, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,60L60,51.7C120,43,240,27,360,16.7C480,7,600,3,720,15C840,27,960,53,1080,60C1200,67,1320,53,1440,45C1560,37,1680,33,1800,30C1920,27,2040,23,2160,30C2280,37,2400,53,2520,63.3C2640,73,2760,77,2880,75C3000,73,3120,67,3240,58.3C3360,50,3480,40,3600,31.7C3720,23,3840,17,3960,25C4080,33,4200,57,4320,58.3C4440,60,4560,40,4680,36.7C4800,33,4920,47,5040,43.3C5160,40,5280,20,5400,25C5520,30,5640,60,5760,68.3C5880,77,6000,63,6120,60C6240,57,6360,63,6480,60C6600,57,6720,43,6840,46.7C6960,50,7080,70,7200,76.7C7320,83,7440,77,7560,76.7C7680,77,7800,83,7920,83.3C8040,83,8160,77,8280,66.7C8400,57,8520,43,8580,36.7L8640,30L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path></svg>
    </section>
</template>

<style scoped lang="scss">
#serviciosSection {
    width: 100%;
    background: $color-blue-2;    
    padding: 1rem;
    position: relative;
    padding-top: 2rem;
    padding-bottom: 6rem;
    
    color: $color-white;
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

    .subtitle {
        font-size: 1rem;
        font-weight: $font-weight-light;
    }

    .services-card-container {
        width: 95%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
    }

    .svg-wave {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
        background-color: $color-white;
    }
}
</style>