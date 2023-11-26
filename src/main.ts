import { createApp } from 'vue';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import '@/scss/style.scss';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
// import moment from 'moment';
import Maska from 'maska';

const app = createApp(App);
app.use(PerfectScrollbar);
app.use(Maska);
app.use(vuetify);
// app.config.globalProperties.$moment = moment;
app.mount('#app');
