export default {
  bind(el, { expression }, { context }) {
    el._outside_handler = (e) => el.contains(e.target) || context[expression]();
    document.addEventListener("click", el._outside_handler);
  },
  unbind(el) {
    document.removeEventListener("click", el._outside_handler, true);
  },
};
