<template>
  <div class="main-layout">
    <Sidebar class="main-layout__sidebar" />
    <HeadBar class="main-layout__head-bar" />
    <main class="main-layout__main-container">
      <section class="main-layout__main-content">
        <section class="main-layout__main-content__content">
          <slot name="main-content"></slot>
        </section>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import HeadBar from "@/modules/Shared/Components/Layout/HeadBar.vue";
import Sidebar from "@/modules/Shared/Components/Layout/Sidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Sidebar, HeadBar },
});
</script>

<style scoped>
.main-layout::v-deep {
  --color-bg-content: var(--color-neutral-white);
  --color-bg-nav-header: var(--color-neutral-gray-100);
  --color-bg-footer: var(--color-neutral-gray-200);
  --color-border-layout: var(--color-neutral-gray-300);
}

.main-layout {
  height: 100%;
  display: grid;
  grid-template: var(--g-template-main);
  grid-template-areas: var(--g-areas-main);
}

.main-layout__sidebar {
  grid-area: ml-sidebar;
}

.main-layout__head-bar {
  grid-area: ml-head-bar;
}

.main-layout__main-container {
  display: grid;
  margin: 1.5rem 1.5rem 0;
  height: calc(100vh - 7.5rem);
  grid-area: ml-main-container;
  background-color: var(--color-bg-content);
  box-shadow: 0 0 1.6rem hsla(0, 0%, 0%, 0.2);
  grid-template: var(--g-template-main-container);
  grid-template-areas: var(--g-areas-main-container);
}

.main-layout__main-content {
  overflow-y: hidden;
  display: grid;
  grid-area: ml-main-content;
  grid-template: var(--g-template-main-content);
  grid-template-areas: var(--g-areas-main-content);
}

.main-layout__main-content__content {
  overflow-y: scroll;
  grid-area: ml-main-content-content;
}

@media only screen and (max-width: 480px) {
  .main-layout__main-container {
    grid-template: var(--g-template-main-container--mobile--);
    grid-template-areas: var(--g-areas-main-container--mobile--);
  }
}
</style>
