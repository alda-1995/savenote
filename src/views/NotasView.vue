<template>
    <div class="container">
        <h1 class="text-secondary mb-16">Mis Notas</h1>
        <div class="max-w-[500px]">
            <div class="flex justify-center mb-4">
                <btn-action background="btn-add" type-icon="add" v-on:my-accion="agregaNota"></btn-action>
            </div>
            <empty-notas v-if="listNotas.length > 0"></empty-notas>
            <lista-notas></lista-notas>
        </div>
    </div>
</template>
<script>

import EmptyNotas from '@/components/informativos/empty-notas.vue';
import ListaNotas from '@/components/informativos/lista-notas.vue';
import BtnAction from '@/components/ui-components/btn-action.vue';

export default {
    name: "NotaView",
    data: () => ({ listNotas: [] }),
    components: {
        EmptyNotas,
        ListaNotas,
        BtnAction
    },
    methods: {
        agregaNota() {
            alert("agrega")
        }
    }
}
</script>