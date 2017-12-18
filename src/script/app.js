import Vue from 'vue';
import router from '../router';
import App from './App.vue'
import axios from '../http/axios.js'
import { store } from '../store/store.js'

// vue-bus
import Vuebus from 'vue-bus';
Vue.use(Vuebus);
// mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
// element-插件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// css样式
import '../icon/iconfont.css';
import '../static/css/reset.css'
import '../static/css/style.css'

Vue.config.productionTip = false
Vue.config.silent = true
new Vue({
    el: '#app',
    store,
    router,
    render(createElement) {
        return createElement(App)
    }
})