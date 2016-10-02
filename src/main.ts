import * as Vue from 'vue';
import * as Vuex from 'vuex';
import * as VueRouter from 'vue-router';

import './vendor'; // f.ex bootstrap

// alternatively use stylus
require('./main.scss'); //global css

/*
  For components that will be used in html (such as navbar),
  all you need to do is import the file somewhere in your code,
  they are automatically registered when the file is loaded.
  However, if you import the class (ex: import { Navbar } from './navbar'),
  you will have to call new Navbar() somewhere as well. You would want
  to do that if you are defining a components{} object in the @VueComponent
  options parameter.
*/
import './components/navbar/navbar'

import { HomeComponent as Home } from './views/home/home'
import { AboutComponent as About } from './views/about/about'

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
];

const router = new VueRouter({routes});

const app = new Vue({
  router
}).$mount('#app-main');
