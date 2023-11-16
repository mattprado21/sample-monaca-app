<template>
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">{{ title }}</div>
        <div class="right">
          <v-ons-toolbar-button>
            <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
      </v-ons-toolbar>
      <div style="text-align: center; padding-top:50px">
          This app main purpose is to check the behavior of InAppBrowser when opening Youtube Links
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 50%;">
        <!-- Use flex container to center -->
        <v-ons-button style="margin-top: 10px; margin-bottom: 10px;" @click="test1">_blank (location=yes)</v-ons-button>
        <v-ons-button style="margin-top: 10px; margin-bottom: 10px;" @click="test2">_system (location=yes)</v-ons-button>
        <v-ons-button style="margin-top: 10px; margin-bottom: 10px;" @click="test3">_self (location=yes)</v-ons-button>
      </div>
    </v-ons-page>
</template>
<script>
  export default{
    data() {
      return {
        title: 'Inappbrowser 5.0'
      };
    },
    methods: {
      test1() {
        cordova.InAppBrowser.open('https://youtu.be/2Vv-BfVoq4g', '_blank', 'location=yes');
      },
      test2() {
        cordova.InAppBrowser.open('https://youtu.be/2Vv-BfVoq4g', '_system', 'location=yes');
      },
      test3() {
        cordova.InAppBrowser.open('https://youtu.be/2Vv-BfVoq4g', '_self', 'location=yes');
      },
    }
  };
</script>
