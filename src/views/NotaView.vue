<template>
    <div class="container">
        <div class="max-w-[500px]">
            <div class="flex flex-col">
                <h2 class="text-secondary mb-8">{{ this.$route.params.id ? 'Editar nota' : 'Nueva nota' }}</h2>
                <form @submit.prevent="guardarNota()" novalidate>
                    <div class="flex flex-col" :class="{ error: v$.titulo.$errors.length }">
                        <label for="titulo" class="mb-2 text-main p">Título</label>
                        <input-main name="titulo" typeInput="text" v-model="titulo"
                            placename="Escribe un título"></input-main>
                        <div class="input-errors" v-for="error of v$.titulo.$errors" :key="error.$uid">
                            <div class="text-redme p-small mb-2">{{ error.$message }}</div>
                        </div>
                    </div>
                    <div class="flex flex-col" :class="{ error: v$.texto.$errors.length }">
                        <label for="texto" class="mb-2 text-main p">Texto</label>
                        <TextAreaMain name="texto" v-model="texto"
                            placename="Escribe un texto"></TextAreaMain>
                        <div class="input-errors" v-for="error of v$.texto.$errors" :key="error.$uid">
                            <div class="text-redme p-small mb-2">{{ error.$message }}</div>
                        </div>
                    </div>
                    <btn-main typeBtn="submit" message="Guardar"></btn-main>
                    <p class="text-redme mt-4" v-if="this.errorGeneral">{{ errorGeneral }}</p>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import InputMain from '@/components/ui-components/input-main.vue';
import BtnMain from '@/components/ui-components/btn-main.vue';
import TextAreaMain from '@/components/ui-components/textarea-main.vue';

export default {
    name: "NotaView",
    setup: () => ({ v$: useVuelidate() }),
    data: () => ({ nameView: "Agregar", titulo: "", texto: "", fecha: "", errorGeneral: "" }),
    components: {
        BtnMain,
        InputMain,
        TextAreaMain
    },
    methods: {
        guardarNota() {

        }
    },
    validations() {
        return {
            titulo: {
                required: helpers.withMessage('El título es requerido', required)
            },
            texto: {
                required: helpers.withMessage('El texto es requerido', required)
            },
        }
    }
}
</script>