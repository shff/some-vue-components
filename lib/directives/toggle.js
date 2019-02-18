export default {
  name: "toggle",
  bind(el, { expression }, { context }) {
    el.addEventListener("click", () => context[expression] = !context[expression]);
  },
};
