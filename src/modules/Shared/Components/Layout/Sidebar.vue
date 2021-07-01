<template>
  <aside class="sidebar">
    <ul class="sidebar__items-list">
      <Item
        url="/profile"
        img="https://joeschmoe.io/api/v1/random"
        alt="profile image"
        class="sidebar__item--special sidebar__item--bg-color"
      />
      <Item
        action="asd"
        icon="apps"
        color="#E53935"
        class="sidebar__item"
        hover-shift
      />
      <Item
        url="/dashboard"
        icon="bar_chart"
        color="#1DE9B6"
        class="sidebar__item sidebar__item--hover"
        hover-shift
      />
      <Item
        url="/academy"
        icon="account_balance"
        color="#66BB6A"
        class="sidebar__item"
        hover-shift
      />
      <Item
        url="/mycourses"
        icon="business_center"
        color="#7BB342"
        class="sidebar__item"
        hover-shift
      />
      <Item
        url="/mychallenges"
        icon="lightbulb_outline"
        color="#CBDA39"
        class="sidebar__item"
        hover-shift
      />
      <Item
        url="/collaborations"
        icon="groups"
        color="#F9A825"
        class="sidebar__item"
        hover-shift
      />
      <Item
        action="asd"
        icon="more_horiz"
        color="#FABE08"
        class="sidebar__item"
        hover-shift
      />
    </ul>
  </aside>
</template>

<script lang="ts">
import Item from "@/modules/Shared/Components/Layout/Item.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Item },
});
</script>

<style scoped>
.sidebar {
  background-color: var(--color-neutral-gray-400);
  height: 100%;
  width: 6rem;
}

.sidebar__item {
  height: 6.7rem;
}

.sidebar__item--special {
  height: 5.6rem;
}

.sidebar__item--bg-color {
  background-color: #01579b;
}
</style>
