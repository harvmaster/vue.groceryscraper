import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Ruoter
import router from './router'

// icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as ioIcons from 'oh-vue-icons/icons/io';

const io = Object.values({ ...ioIcons });
addIcons(...io);

const app = createApp(App);
app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
