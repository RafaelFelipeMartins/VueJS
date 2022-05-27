import Vue from 'vue'
import Contador from './Contador.vue'

Vue.config.productionTip = false
Vue.component('app-contadores', Contador)

new Vue({
    render: h => h(App),
}).$mount('#app')