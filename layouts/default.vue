<script lang="ts">
import { defineComponent } from "vue";
import Header from "../src/components/Header.vue";

export default defineComponent({
  components: { Header },
});
</script>

<template>
  <div class="container">
    <Header />
    <RouterView />
  </div>
</template>
