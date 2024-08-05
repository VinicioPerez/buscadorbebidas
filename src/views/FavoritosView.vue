<script setup>
    import Receta from '@/components/Receta.vue';
    import { useFavoritosStore } from '@/stores/favoritos';

    const favoritos = useFavoritosStore()

</script>

<template>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>
    <p v-if="favoritos.noFavoritos" class="my-10 text-center text-3xl font-bold">No hay Favoritos</p>

    <div v-else class="grid grid-cols-1 text-center md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 p-4">
        <Receta 
            v-for="receta in favoritos.favoritos"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>
    
</template>