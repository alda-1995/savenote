import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { auth } from "@/firebase";

let app;
auth.onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('setUsuario', user);
    }
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app')
    }
});