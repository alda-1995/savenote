<template>
    <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-tertiary z-50">
        <div class="flex justify-end">
            <XMarkIcon class="h-8 w-8 text-white"/>
        </div>
        <div class="p-2.5 mt-1 flex items-center">
            <h4 class="font-bold text-white">MENU</h4>
        </div>
        <div class="my-2 bg-white h-[1px]"></div>
        <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-main text-white">
            <IdentificationIcon class="h-8 w-8 text-white"/>
            <div class="flex justify-between w-full items-center">
                <span class="h5 ml-4">Perfil</span>
            </div>
        </div>
        <div class="my-2 bg-white h-[1px]"></div>
        <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-main text-white">
            <PencilIcon class="h-8 w-8 text-white"/>
            <div class="flex justify-between w-full items-center">
                <span class="h5 ml-4">Notas</span>
            </div>
        </div>
        <div class="my-2 bg-white h-[1px]"></div>
        <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-main text-white">
            <ArrowLeftOnRectangleIcon class="h-8 w-8 text-white"/>
            <div class="flex justify-between w-full items-center">
                <span class="h5 ml-4">Cerrar Sesión</span>
            </div>
        </div>
    </div>
</template>

<script>
import { XMarkIcon, IdentificationIcon, ArrowLeftOnRectangleIcon, PencilIcon } from '@heroicons/vue/24/solid'
export default {
    name: "SideBar",
    components:{
        XMarkIcon,
        IdentificationIcon,
        ArrowLeftOnRectangleIcon,
        PencilIcon
    }
}
</script>