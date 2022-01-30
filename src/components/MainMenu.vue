<template>
  <div class="col-12 row container border">
    <food-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></food-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import FoodCard from './FoodCard.vue';
import { useStore } from '../store/index';

export default defineComponent({
  components: {
    FoodCard,
  },
  setup() {
    const $store = useStore();
    const products = computed(() => $store.state.productsModule.products);

    return { products };
  },
});
</script>
