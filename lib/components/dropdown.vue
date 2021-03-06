<template>
  <div :class="`mb3 col-12 sm-col-${size}`">
    <div class="relative">
      <input
        :value="displayValue"
        :disabled="isDisabled"
        :class="{
          'active': focus,
          'error': errors && errors.length,
          'dotted-line': isDisabled,
          'input-line': !isDisabled,
        }"
        :id="`fld${_uid}`"
        type="text"
        readonly
        class="m0 py2 border-none ease h5 w100 bg-transparent"
        @focus="onFocus"
        @click="onFocus">
      <label
        v-if="!focus"
        :class="{
          nudge: nudge,
          red: !nudge && allErrors.length,
          dim: nudge || !allErrors.length,
        }"
        :for="`fld${_uid}`"
        class="py2 absolute top-0 left-0 bounce h5 noclick truncate">
        {{ label }}
      </label>
      <span
        v-if="!focus"
        class="absolute top-0 right-0 py2 noclick dim">
        ▼
      </span>
      <Outside
        v-if="focus"
        class="absolute top-0 bg-white shadow1 w100 z2 height-1 flex
          flex-column"
        @click="focus = false">
        <input
          v-el-focus
          v-model="search"
          type="text"
          class="m0 p2 border-none h5 fit bg-transparent"
          placeholder="Busca..."
          @blur="onBlur">
        <div
          ref="optionBox"
          class="overflow-auto hide-scroll">
          <div
            v-for="opt in filteredOptions"
            :key="opt[idField]"
            :class="{ 'bg-silver': choice === opt }"
            :data-selected="choice === opt"
            class="p2 pointer h-bg-silver"
            @click="pick(opt)">
            {{ opt[labelField] }}
          </div>
        </div>
      </Outside>
      <label
        v-if="hint"
        class="block gray h7">{{ hint }}</label>
      <template v-if="allErrors">
        <label
          v-for="error in allErrors"
          :key="error"
          class="block red h7">
          {{ error }}
        </label>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DropDown",
    props: {
      value: {
        type: [String, Number],
        required: false,
        default: null,
      },
      label: {
        type: String,
        required: true,
      },
      options: {
        type: Array,
        required: true,
      },
      idField: {
        type: String,
        default: "id",
      },
      labelField: {
        type: String,
        default: "name",
      },
      hint: {
        type: String,
        required: false,
        default: null,
      },
      size: {
        type: Number,
        required: false,
        default: 12,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      errors: {
        type: Array,
        required: false,
        default: () => [],
      },
      required: {
        type: Boolean,
        default: false,
      },
      filterKey: {
        type: String,
        default: null,
      },
      filter: {
        type: [String, Number],
        default: null,
      },
    },
    data() {
      return {
        focus: false,
        validate: false,
        search: "",
      };
    },
    computed: {
      filteredOptions() {
        return this.options
          .filter(a => !this.filterKey || a[this.filterKey] === this.filter)
          .filter(a => a[this.labelField].toLowerCase()
            .includes(this.search.toLowerCase()));
      },
      choice() {
        return this.options.find(a => a[this.idField] === this.value) || {};
      },
      displayValue() {
        return this.choice && this.choice[this.labelField];
      },
      isDisabled() {
        return this.disabled || !this.options.length;
      },
      allErrors() {
        return [].concat(this.errors || [], this.localErrors);
      },
      localErrors() {
        return [
          this.required && !this.value && "Campo obrigatório",
        ].filter(a => a && this.validate);
      },
      nudge() {
        return this.focus || this.value;
      },
    },
    methods: {
      async onFocus() {
        await this.tick();
        this.focus = true;
        this.search = "";
        const selected = this.$el.querySelector("[data-selected]");
        if (selected) {
          const top = selected.offsetTop - selected.offsetHeight;
          this.$refs.optionBox.scrollTop = top;
        }
      },
      async onBlur() {
        await this.sleep(150);
        this.focus = false;
        this.search = "";
        this.validate = true;
      },
      pick(option) {
        this.focus = false;
        this.$emit("input", option[this.idField]);
      },
    },
  };
</script>
