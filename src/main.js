import Vue from 'vue'

//defined as global component
Vue.component('V-MaterialIcon', require('vue-materials-icon/src/components/MaterialIcon').default);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
