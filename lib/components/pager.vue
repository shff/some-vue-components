<template>
  <ButtonGroup
    v-if="options.length > 1"
    :container="container"
    :options="options"
    :value="value"
    @input="$emit('input', $event)" />
</template>

<script>
  import { range } from "lodash";
  const { ceil, min, max } = Math;

  export default {
    name: "Pager",
    props: {
      value: {
        type: Number,
        required: true,
      },
      records: {
        type: Number,
        required: true,
      },
      perPage: {
        type: Number,
        default: 20,
      },
      offset: {
        type: Number,
        default: 5,
      },
      container: {
        type: String,
        default: "span",
      },
    },
    computed: {
      options() {
        const pages = ceil(this.records / this.perPage);
        const first = min(max(this.value - this.offset, 1), pages);
        const last = min(this.value + this.offset, pages);
        return range(first, last + 1).map(n => ({ id: n, name: `${n}` }));
      },
    },
  };
</script>
