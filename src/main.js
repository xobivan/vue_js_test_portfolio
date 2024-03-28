import { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import App from './App.vue';

import AnimateOnVisible from "./components/AnimateOnVisible.vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

/* import VueTimeline from "@growthbunker/vuetimeline"; */

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {faInstagramSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';


/* const firebaseConfig = {
    apiKey: "AIzaSyDCp_HLIQcAEickcFv2GARz4x9p3J_AMBg",
    authDomain: "dmitry-spivak-portfolio.firebaseapp.com",
    databaseURL: "https://dmitry-spivak-portfolio-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dmitry-spivak-portfolio",
    storageBucket: "dmitry-spivak-portfolio.appspot.com",
    messagingSenderId: "453158869926",
    appId: "1:453158869926:web:30507a2a0e50abc8ea0d67",
    measurementId: "G-HR0S9B9BFR"
  }; */
library.add(faCopyright, faInstagramSquare, faLinkedin, faGithubSquare);



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.component('AnimateOnVisible', AnimateOnVisible)
.use(BootstrapVue3)
.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
import './styles/global.scss';


