<template >
    <div class="container">
    <div class="min-h-screen flex py-16">
      <div class="grid md:grid-cols-2 md:gap-4">
        <div class="flex flex-col">
          <h1 class="text-tertiary">Comienza a guardar tus notas aquí.</h1>
        </div>
        <div class="flex flex-col">
          <form class="w-full md:pl-24" @submit.prevent="ingresarUsuario()">
            <div class="p-12 bg-tertiary rounded-md">
              <div class="flex flex-col">
                <label for="correo" class="mb-2 text-white p">Correo electronico</label>
                <input-main name="correo" typeInput="text" v-model="correo" placename="Correo electronico"></input-main>
              </div>
              <div class="flex flex-col">
                <label for="password" class="mb-2 text-white p">Contraseña</label>
                <input-main name="password" typeInput="text" v-model="password"
                  placename="Correo electronico"></input-main>
              </div>
              <div class="flex flex-col">
                <label for="passwordConfirm" class="mb-2 text-white p">Confirmar Contraseña</label>
                <input-main name="passwordConfirm" typeInput="text" v-model="passwordConfirm"
                  placename="Introduce nuevamente tu contraseña"></input-main>
              </div>
              <btn-main typeBtn="submit" message="Entrar"></btn-main>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InputMain from '@/components/ui-components/input-main.vue'
import BtnMain from '@/components/ui-components/btn-main.vue'
export default {
  name: 'RegistroView',
  data() {
    return {
      correo: "",
      password: "",
      passwordConfirm: ""
    };
  },
  components: {
    InputMain,
    BtnMain
  },
  methods:{
    ingresarUsuario(){
      alert("entra");
    }
  }
}
</script>