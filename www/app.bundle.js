"use strict";(self.webpackChunkonsenui_v2_vue_minimum=self.webpackChunkonsenui_v2_vue_minimum||[]).push([[143],{1930:(t,e,n)=>{var o=n(6566),i=n(538),s=n(4430),a=n.n(s),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-ons-page",[n("v-ons-toolbar",[n("div",{staticClass:"center"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"right"},[n("v-ons-toolbar-button",[n("v-ons-icon",{attrs:{icon:"ion-navicon, material: md-menu"}})],1)],1)]),t._v(" "),n("div",{staticStyle:{"text-align":"center","padding-top":"50px"}},[t._v("\n      This app main purpose is to check the behavior of InAppBrowser when opening Youtube Links\n  ")]),t._v(" "),n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"50%"}},[n("v-ons-button",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},on:{click:t.test1}},[t._v("_blank (location=yes)")]),t._v(" "),n("v-ons-button",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},on:{click:t.test2}},[t._v("_system (location=yes)")]),t._v(" "),n("v-ons-button",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},on:{click:t.test3}},[t._v("_self (location=yes)")])],1)],1)};p._withStripped=!0;const c={data:function(){return{title:"Inappbrowser 5.0"}},methods:{test1:function(){cordova.InAppBrowser.open("https://youtu.be/2Vv-BfVoq4g","_blank","location=yes")},test2:function(){cordova.InAppBrowser.open("https://youtu.be/2Vv-BfVoq4g","_system","location=yes")},test3:function(){cordova.InAppBrowser.open("https://youtu.be/2Vv-BfVoq4g","_self","location=yes")}}},r=(0,n(1900).Z)(c,p,[],!1,null,null,null).exports;n(8408),n(8777),o.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape","")),i.Z.use(a()),new i.Z({el:"#app",template:"<app></app>",components:{App:r}}),document.addEventListener("undefined"!=typeof cordova?"deviceready":"DOMContentLoaded",(function(){"undefined"!=typeof cordova&&(window.open=cordova.InAppBrowser.open)}),!1)}},t=>{t.O(0,[625],(()=>(1930,t(t.s=1930)))),t.O()}]);