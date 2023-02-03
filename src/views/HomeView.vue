<template>
  <div class="home">
    <side-bar></side-bar>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import SideBar from '@/components/side-bar.vue';

export default {
  name: 'HomeView',
  components: {
    SideBar
  }
}
</script>
