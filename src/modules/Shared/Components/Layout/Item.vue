<template>
  <li class="item" :class="{ 'item--hover': hoverShift }">
    <a v-if="url" href="javascript:;" class="item__link">
      <img v-if="img" :src="img" :alt="alt || 'image'" class="item__image" />
      <I
        :glyph="icon"
        :color="color"
        :class="{ 'i--shift-color': hoverShift }"
      />
    </a>
    <button v-if="action" class="item__button">
      <I
        :glyph="icon"
        :color="color"
        :class="{ 'i--shift-color': hoverShift }"
      />
    </button>
  </li>
</template>

<script lang="ts">
import I from "@/modules/Shared/Components/UI/I.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { I },
  props: {
    icon: String,
    alt: String,
    url: String,
    img: String,
    action: String,
    color: String,
    hoverShift: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style>
.item__link {
  display: block;
}

.item__button {
  cursor: pointer;
}

.item__image {
  background-color: var(--color-neutral-white);
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.4);
}

.item__link,
.item__button {
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
}

.item--hover {
  transition: background-color 0.5s ease-out;
}

.item--hover:hover {
  background-color: v-bind(color);
  transition: background-color 0.1s ease-in;
}

.item--hover:hover .i--shift-color {
  color: var(--color-neutral-white);
  transition: color 0.5s ease-in-out;
}
</style>
