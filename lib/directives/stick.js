export default {
  bind(el, binding) {
    console.log("Sticking");
    new MutationObserver(() => console.log("YES"))
      .observe(el, {childList: true});
  },
  inserted(el) {
    el.scroll({ top: el.scrollHeight, behavior: "smooth" });
  },
};
