import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '/src/assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

var numeral = require("numeral");

Vue.filter("formatNumber", function (value) {
    return numeral(value).format("0,0");
});

Vue.filter('str_limit', function (value, size) {
    if (!value) 
        return '';
    value = value.toString();

    if (value.length <= size) {
        return value;
    }
    return value.substr(0, size) + '...';
});

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
