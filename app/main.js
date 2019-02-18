import Vue from "vue";
import Lib from "../lib";
import App from "./app.vue";

Vue.use(Lib);

new Vue({ render: r => r(App) }).$mount("main");
