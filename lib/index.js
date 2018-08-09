import "tachyons";
import VOutside from "./directives/outside";
import VFocus from "./directives/focus";
import VToggle from "./directives/toggle";
import Accordion from "./components/accordion.vue";
import Alert from "./components/alert.vue";
import Btn from "./components/btn.vue";

export default (Vue) => {
  Vue.directive("outside", VOutside);
  Vue.directive("focus", VFocus);
  Vue.directive("toggle", VToggle);
  Vue.component("Accordion", Accordion);
  Vue.component("Alert", Alert);
  Vue.component("Btn", Btn);
};
