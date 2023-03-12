<template>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
  <div class="content-g">
    <router-view />
  </div>
</template>
<script>
import NavBar from './components/nav-bar.vue'
import SideBar from '@/components/side-bar.vue';
export default {
  name: 'App',
  components:{
    NavBar,
    SideBar
  }
}
</script>
