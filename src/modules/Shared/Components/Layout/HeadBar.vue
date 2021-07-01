<template>
  <div class="head-bar">
    <a href="/" class="head-bar__logo">
      <img
        src="https://i.imgur.com/eWXiZ90.png"
        alt="Telanto Logo"
        class="head-bar__logo__img"
      />
    </a>
    <ul class="head-bar__item-list">
      <Item
        url="/#"
        icon="help"
        color="#FFF"
        class="head-bar__item-list__item"
      />
      <Item
        action="#"
        icon="notifications"
        color="#FFF"
        class="head-bar__item-list__item"
      />
      <Item
        url="/chat"
        icon="chat_bubble"
        color="#FFF"
        class="head-bar__item-list__item"
      />
      <Item
        url="/#"
        icon="power_settings_new"
        color="#FFF"
        class="head-bar__item-list__item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Item from "@/modules/Shared/Components/Layout/Item.vue";

export default defineComponent({
  components: { Item },
});
</script>

<style scoped>
.head-bar {
  display: flex;
  height: 5.6rem;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-main-brand);
}

.head-bar__logo {
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 2.4rem;
}

.head-bar__logo__img {
  margin-top: 0.2rem;
  width: 12.8rem;
  height: 2.9rem;
}

.head-bar__item-list {
  height: 100%;
  display: flex;
}

.head-bar__item-list__item {
  height: 100%;
  width: 5.4rem;
}

.head-bar__item-list__item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-out;
}
</style>
