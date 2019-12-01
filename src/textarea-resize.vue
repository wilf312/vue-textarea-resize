<template>
  <textarea v-autosize :value="value" @input="onInput" :style="style" />
</template>

<script>
import autosize from "v-autosize";

export default {
  directives: {
    autosize
  },
  props: {
    value: {
      required: true,
      type: String
    },
    minHeight: {
      type: String | Number,
      default: 0
    },
    maxHeight: {
      type: String | Number,
      default: 0
    }
  },
  methods: {
    onInput(ev) {
      this.$emit("input", ev.target.value);
    }
  },
  computed: {
    style() {
      return {
        minHeight: this.minHeight ? `${this.minHeight}px` : "",
        maxHeight: this.maxHeight ? `${this.maxHeight}px` : ""
      };
    }
  }
};
</script>