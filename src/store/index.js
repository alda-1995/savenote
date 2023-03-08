import { createStore } from 'vuex'
// import { getAuth } from "@/firebase";
import { getAuth } from "firebase/auth";

export default createStore({
  state: {
    usuario: null
  },
  getters: {
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
  },
  actions: {
    async registroUsuarioCorreo({ state }, usuario) {
      const authMe = getAuth();
      if(authMe)
      console.log(authMe, state, usuario);
    }
  },
  modules: {
  }
})
