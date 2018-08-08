export default {
  bind(el, { expression }, { context }) {
    el.addEventListener("click", () => context[expression] = !context[expression]);
  },
};
