import { defineStore } from "pinia";
import { ref, reactive, onMounted, computed} from "vue";
import APIservice from "@/services/APIservice";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore('bebidas', () => {
    
    const modal = useModalStore()
    const categorias = ref([]);
    const busqueda = reactive({
        nombre: '',
        categoria: ''
    })
    
    const recetas = ref([]);
    const receta = ref({})

    onMounted(async () => {
        const {data: {drinks}} = await APIservice.obtenerCategorias()
        
        categorias.value = drinks
    })

    async function obtenerRecetas() {
        const {data: {drinks}} = await APIservice.buscarRecetas(busqueda)
        recetas.value = drinks
    }

    async function seleccionarBebida(id){
       const {data: {drinks}} = await APIservice.buscarReceta(id)
       receta.value = drinks[0]

       modal.handleClickModal()
    }
    
    const noRecetas = computed(() => recetas.value.length === 0)
    
    return {
        categorias,
        busqueda,
        recetas,
        receta,
        noRecetas,
        obtenerRecetas,
        seleccionarBebida,
    }
})