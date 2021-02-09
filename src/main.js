import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import config from './config.js'
import drizzleVuePlugin from '@drizzle/vue-plugin'
import drizzleOptions from './drizzleOptions'
import VueKonami from 'vue-konami'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import vuetify from './plugins/vuetify';

Vue.use(Buefy, {
  defaultUseHtml5Validation: false,
})

Vue.use(VueKonami)

Vue.use(Vuex)
const store = new Vuex.Store({ state: {} })

const vaultPath = window.location.pathname.substring(1)
const vaultConfig = config[vaultPath] || null;
console.log(drizzleOptions(vaultConfig));
Vue.use(drizzleVuePlugin, { store, drizzleOptions: drizzleOptions(vaultConfig) })

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')