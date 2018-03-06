import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes'; // tem que vir entre chaves, porque não é default

Vue.use(VueRouter); // registrando o módulo/plugin no global view object
const router = new VueRouter({
  //routes : routes // Em ES6, quando o valor e a propriedade possuem o mesmo nome, podemos simplesmente fazer assim:
  routes: routes
});

Vue.use(VueResource); // registrando o módulo/plugin no global view object
new Vue({ //view instance, aquela que renderiza nosso componente App:
  el: '#app',
  router,
  render: h => h(App)
});

