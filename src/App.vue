<template>
  <nav-bar></nav-bar>
  <div class="pt-28">
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/nav-bar.vue'
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>
