<template>
    <div class="flex items-center">
        <div class="flex-1 group border-secondary border-2 border-solid p-6 transition-all relative text-tertiary">
            <h4 class="flex items-center group-hover:opacity-0 transition-all">
                <div class="mr-4">
                    <BookOpenIcon class="text-secondary h-8 w-8"></BookOpenIcon>
                </div>
                Url
            </h4>
            <router-link to=""
                class="flex items-center justify-center absolute top-0 left-0 h-full w-full bg-main transition-all opacity-0 group-hover:opacity-100">
                <EyeIcon class="text-white h-8 w-8"></EyeIcon>
            </router-link>
        </div>
        <div class="shrink-0 ml-2">
            <btn-action background="btn-remove" type-icon="remove" v-on:my-accion="agregaNota"></btn-action>
        </div>
    </div>
</template>
<script>
import BtnAction from '@/components/ui-components/btn-action.vue';
import { EyeIcon, BookOpenIcon } from '@heroicons/vue/24/solid';
export default {
    name: "NotaItem",
    components: {
        EyeIcon,
        BookOpenIcon,
        BtnAction
    }
}
</script>