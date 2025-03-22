<script setup>
const { images } = defineProps({
    images: Array,
})
</script>

<template>
    <v-carousel hide-delimiters height="300">
        <v-carousel-item v-for="(item, i) in images" :key="i" :src="item"></v-carousel-item>
    </v-carousel>   
</template>

<style scoped>
</style>