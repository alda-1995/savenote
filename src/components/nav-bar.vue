<template>
  <nav class="fixed top-0 left-0 z-50 w-full">
    <div class="container">
      <div class="flex items-center justify-between h-[90px]">
        <router-link to="/">
          <img :src="require('@/assets/logo.png')" class="max-w-[60px]" alt="logo">
        </router-link>
        <div class="flex" v-if="!usuarioAutenticado">
          <link-main :url="{ name: 'login' }" background="bg-main" message="Login" class="mr-4"></link-main>
          <link-main :url="{ name: 'registro' }" background="bg-secondary" message="Registro"></link-main>
        </div>
        <div class="rounded-full h-12 w-12 bg-secondary flex justify-center items-center hover:bg-main transition-all">
          <Bars2Icon class="h-6 w-6 text-white"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Bars2Icon } from '@heroicons/vue/24/solid'
import LinkMain from '@/components/ui-components/link-main.vue'
import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  components: {
    LinkMain,
    Bars2Icon
  },
  methods: {
  },
  computed: {
    ...mapGetters(["usuarioAutenticado"])
  }
}
</script>