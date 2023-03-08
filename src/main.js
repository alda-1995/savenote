import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { auth } from "@/firebase";

auth.onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('setUsuario', user);
    }
    createApp(App).use(store).use(router).mount('#app')
});