<template>
  <i class="icon">
    {{ glyph }}
  </i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    glyph: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "white",
    },
  },

  setup(props) {
    return {
      fontSize: `var(--i-size-${props.size})`,
    };
  },
});
</script>

<style>
.icon {
  color: v-bind(color);
  font-size: v-bind(fontSize);
  font-family: var(--font-family-icons);
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
