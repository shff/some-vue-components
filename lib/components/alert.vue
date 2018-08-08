<template>
  <div
    :class="{
      'bg-green': success,
      'bg-red': error,
      'bg-yellow': warning,
      'bg-blue': !success && !warning && !error,
    }"
    class="sans-serif pa3 white b--white-40 bt bw2 mb3">
    {{ message }}
    <slot />
  </div>
</template>

<script>
  export default {
    name: "Alert",
    props: {
      message: {
        type: String,
        required: false,
        default: null,
      },
      info: {
        type: Boolean,
        default: false,
        required: false,
      },
      success: {
        type: Boolean,
        default: false,
        required: false,
      },
      error: {
        type: Boolean,
        default: false,
        required: false,
      },
      warning: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
  };
</script>
