<template>
  <nav class="fixed top-0 left-0 z-50 w-full">
    <div class="container">
      <div class="flex items-center justify-between h-[90px]">
        <router-link to="/">
          <img :src="require('@/assets/logo.png')" class="max-w-[60px]" alt="logo">
        </router-link>
        <div class="flex">
          <link-main :url="{ name: 'login' }" background="bg-main" message="Login" class="mr-4"></link-main>
          <link-main :url="{ name: 'login' }" background="bg-secondary" message="Registro"></link-main>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LinkMain from '@/components/ui-components/link-main.vue'

export default {
  name: "NavBar",
  components: {
    LinkMain
  },
  methods: {
  }
}
</script>