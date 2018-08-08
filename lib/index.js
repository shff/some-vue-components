import "tachyons";
import VOutside from "./directives/outside";
import VFocus from "./directives/focus";
import VToggle from "./directives/toggle";
import VStick from "./directives/stick";
import Accordion from "./components/accordion.vue";
import Alert from "./components/alert.vue";

export default (Vue) => {
  Vue.directive("outside", VOutside);
  Vue.directive("focus", VFocus);
  Vue.directive("toggle", VToggle);
  Vue.directive("stick", VStick);
  Vue.component("Accordion", Accordion);
  Vue.component("Alert", Alert);
};
