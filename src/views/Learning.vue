<template>
  <MainLayout>
    <template v-slot:main-content>
      <h1>INCLUSIVE TECH: BUILDING YOUR TEAM</h1>
      <h2>Hola mundo </h2>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "@/modules/Shared/Components/Layout/MainLayout.vue";

export default defineComponent({
  name: "Home",
  components: { MainLayout },
});
</script>
