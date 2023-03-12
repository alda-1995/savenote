<template>
    <div class="flex flex-col">
        <NotaItem></NotaItem>
    </div>
</template>
<script>
import NotaItem from './nota-item.vue';
export default {
    name: "ListaNotas",
    components:{
        NotaItem
    }
}
</script>