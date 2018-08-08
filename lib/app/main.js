import Vue from "vue";
import Lib from "..";
import App from "./app.vue";

Vue.use(Lib);

new Vue({ render: r => r(App) }).$mount("main");
