<template>
  <div>
    <div
      class="sans-serif pa3 bg-moon-gray flex-ns b--white-40 bt bw2"
      @click="open = !open">
      <span class="white f6 ttu flex-auto">{{ title }}</span>
      <span class="f4 lh-solid white">{{ open ? '－' : '＋' }}</span>
    </div>
    <div
      v-if="open"
      class="pa3">
      <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Accordion",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        open: false,
      };
    },
  };
</script>
