<script setup>
import { VCarousel, VCarouselItem, VBtn } from 'vuetify/components'

const props = defineProps({
    description: String,
    images: Array
});

console.log(props.images)
</script>

<template>
    <div class="container">
        <p class="description">{{ props.description }}</p>
        <v-carousel 
            v-if="props.images?.length > 0"
            hide-delimiter-background 
            height="45vh"
            cycle 
        >
            <template v-slot:prev="{ props }">
                <v-btn icon="mdi-chevron-left" variant="text" @click="props.onClick" class="carouselControlBtn"></v-btn>
            </template>
            <template v-slot:next="{ props }">
                <v-btn icon="mdi-chevron-right" variant="text" @click="props.onClick"
                    class="carouselControlBtn"></v-btn>
            </template>
            <v-carousel-item v-for="img in props.images" :src="img" cover></v-carousel-item>
        </v-carousel>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 1rem;
    padding-left: .5rem;
    padding-right: .5rem;

    .description {
        font-weight: $font-weight-light;
    }

    .carouselControlBtn {
        color: #fff;
        background-color: rgba($color: #fff, $alpha: 0.1);
    }
}
</style>