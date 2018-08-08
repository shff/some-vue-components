export default {
  inserted(el) {
    (el.querySelector("input, select, textarea") || el).focus();
  },
};
