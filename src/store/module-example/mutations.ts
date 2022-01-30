import { MutationTree } from 'vuex';
import { ProductsStateInterface } from 'components/models';

const mutation: MutationTree<ProductsStateInterface> = {
  someMutation (/* state: ProductsStateInterface */) {
    // your code
  }
};

export default mutation;
