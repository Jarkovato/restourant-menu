<template>
  <q-page class="row container">
      <main-menu></main-menu>
  </q-page>
</template>

<script lang="ts">
import MainMenu from 'components/MainMenu.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { MainMenu },
});
</script>

<style lang="scss">
.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
