import ons from 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import App from './App.vue';

// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

if (ons.platform.isIPhoneX()) {
  document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
  document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
}

Vue.use(VueOnsen);

const app = new Vue({
  el: '#app',
  template: '<app></app>',
  components: { App }
});

document.addEventListener(typeof cordova !== 'undefined' ? 'deviceready' : 'DOMContentLoaded', onDeviceReady, false);

function onDeviceReady() {
  // Cordova plugins are now loaded.
  if (typeof cordova !== 'undefined') {
    // Set window to use cordova in app browser
    window.open = cordova.InAppBrowser.open;
  }
}
