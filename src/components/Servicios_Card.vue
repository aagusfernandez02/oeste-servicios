<script setup>
const { item } = defineProps({
    item: Object,
});
</script>

<template>
    <div class="card">
        <h4 class="title">{{ item.title }}</h4>
        <i :class="`mdi ${item.icon} icon`" />
        <p class="subtitle">{{ item.subtitle }}</p>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: 100%;

    padding: 1rem;
    background-color: $color-blue-3;
    color: $color-black;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 15px 10px -5px rgba(0,0,0,0.25);
    -webkit-box-shadow: 0px 15px 10px -5px rgba(0,0,0,0.25);
    -moz-box-shadow: 0px 15px 10px -5px rgba(0,0,0,0.25);

    .title {
        font-weight: $font-weight-bold;
        font-size: 1rem;
    }

    .subtitle {
        font-weight: $font-weight-light;
        font-size: .75rem;
    }

    .icon {
        font-size: 3rem;
    }
}

@media (min-width: 768px) {
    .card {
        .title {
            font-size: 1.05rem;
        }
    
        .subtitle {
            font-size: .85rem;
        }
    
        .icon {
            font-size: 4rem;
        }
    }
}
@media (min-width: 1024px) {
    .card {
        .title {
            font-size: 1.15rem;
        }
    
        .subtitle {
            font-size: 1rem;
        }
    
        .icon {
            font-size: 5rem;
        }
    }
}
</style>