import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: null
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.usuario
    }
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
  },
  actions: {
    setUsuario({ commit }, user) {
      const usuario = {
        email: user.email,
        uid: user.uid,
        foto: user.photoURL
      }
      commit('setUsuario', usuario)
    },
  },
  modules: {
  }
})
