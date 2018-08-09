<template>
  <button
    :class="{
      'bg-green hover-bg-dark-green': success,
      'bg-red hover-bg-dark-red': danger,
      'bg-gold': warning,
      'bg-blue hover-bg-dark-blue': !success && !warning && !danger,
    }"
    :type="submit ? 'submit' : 'button'"
    class="pointer white ttu sans-serif pv2 ph3 lh-copy br2 bn f5"
    @click.prevent="$emit('click')">
    {{ label }}
    <slot />
  </button>
</template>

<script>
  export default {
    name: "Btn",
    props: {
      label: {
        type: String,
        required: false,
        default: "",
      },
      primary: {
        type: Boolean,
        default: false,
      },
      danger: {
        type: Boolean,
        default: false,
      },
      warning: {
        type: Boolean,
        default: false,
      },
      success: {
        type: Boolean,
        default: false,
      },
      submit: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
