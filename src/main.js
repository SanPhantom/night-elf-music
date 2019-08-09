import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import Toast from 'muse-ui-toast'
import 'muse-ui/dist/muse-ui.css'
import utils from '../static/utils'

import "lib-flexible"

Vue.use(MuseUI)
Vue.use(Toast)

Vue.config.productionTip = false

axios.defaults.baseURL = "http://www.sanphantom.cn:3000";
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded"

Vue.prototype.$axios = axios;
Vue.prototype.$utils = utils;


window.onresize = setHtmlFontSize;

function setHtmlFontSize() {
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
