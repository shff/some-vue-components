export default {
  name: "focus",
  inserted(el) {
    (el.querySelector("input, select, textarea") || el).focus();
  },
};
