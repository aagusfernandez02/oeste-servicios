<script setup>
import { VCarousel, VCarouselItem } from 'vuetify/components'

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
            hide-delimiter-background
            cycle
            prev-icon="mdi-chevron-left"
            next-icon="mdi-chevron-right"
            v-if="props.images?.length > 0"
        >
            <v-carousel-item
                v-for="img in props.images"
                :src="img"
                cover
            ></v-carousel-item>
        </v-carousel>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .description {
        font-weight: $font-weight-light;
    }
}
</style>