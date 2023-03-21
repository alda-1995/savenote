import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import { auth } from "@/firebase";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

let app;
auth.onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('setUsuario', user);
    }
    if (!app) {
        app = createApp(App).use(store).use(LoadingPlugin).use(router).mount('#app')
    }
});