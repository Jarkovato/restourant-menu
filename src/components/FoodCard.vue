<template>
  <div class="q-pa-md row items-start q-gutter-md col-4">
    <q-card class="my-card" flat bordered>
      <q-img :src="currentProduct.img" :ratio="4/3" :fit="'contain'"/>
      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ currentProduct.title }}</div>
        <div class="row justify-between items-center">
          <div class="text-caption text-grey">
            {{ currentProduct.weight }}
          </div>
          <div class="text-subtitle1 text-dark">
            {{ currentProduct.price + 'р.' }}
          </div>
        </div>
      </q-card-section>
      <q-card-actions>
        <q-btn flat color="primary" label="В заказ" @click="addToOrder(currentProduct)"/>
        <!-- <q-btn flat color="grey" label="В избранное" /> -->
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ currentProduct.description }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Product } from 'components/models';

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const product = ref(props.product);

    return {
      currentProduct: product,
      expanded: ref(false),
    };
  },
  methods: {
    addToOrder(product: Product) {
      console.log(product);
    }
  }
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
