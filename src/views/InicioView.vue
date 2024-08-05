<script setup>
    import Receta from '@/components/Receta.vue';
    import { useBebidasStore } from '@/stores/bebidas';

    const bebidas = useBebidasStore()

</script>

<template>
    <h1 class="text-6xl text-center font-extrabold">Recetas</h1>
    <p v-if="bebidas.noRecetas" class="my-10 text-center text-3xl font-bold">No hay Resultados, Haga su consulta!</p>

    <div v-else class="grid grid-cols-1 text-center md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 p-4">
        <Receta 
            v-for="receta in bebidas.recetas"
            :receta="receta"
            :key="receta.idDrink"
        />
    </div>
    
</template>
