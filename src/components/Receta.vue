
<script setup>

    import { useBebidasStore } from '@/stores/bebidas';

    const bebidas = useBebidasStore()

    defineProps({
        receta:{
            type: Object,
        }
    })

</script>

<template>
    <div class="border rounded-lg shadow-lg">
        <div class="overflow-hidden">
            <img
                class="hover:scale-125 transition-transform p-5 rounded-lg overflow-hidden hover:rotate-2"
                :src="receta.strDrinkThumb"
                :alt="'Imagen de ' + receta.strDrink"
            />

        </div>
        <div class="p-5">
            <h2 class="text-2xl truncate font-extrabold">{{receta.strDrink}}</h2>
            <button
                type="button"
                class="bg-orange-300 hover:bg-orange-400
                mt-5 w-full p-3 font-bold text-white text-lg rounded-lg"
                @click="bebidas.seleccionarBebida(receta.idDrink)"

            >
                Ver Receta
            </button>
        </div>
    </div>
</template>
