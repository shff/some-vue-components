import "tachyons";
import Accordion from "./components/accordion.vue";
import Alert from "./components/alert.vue";

export default (Vue) => {
  Vue.component("Accordion", Accordion);
  Vue.component("Alert", Alert);
};
