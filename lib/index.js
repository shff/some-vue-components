import "tachyons";
import VOutside from "./directives/outside";
import Accordion from "./components/accordion.vue";
import Alert from "./components/alert.vue";

export default (Vue) => {
  Vue.directive("outside", VOutside);
  Vue.component("Accordion", Accordion);
  Vue.component("Alert", Alert);
};
