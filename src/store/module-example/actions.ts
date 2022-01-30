import { ActionTree } from 'vuex';
import { ProductsStateInterface } from 'components/models';
import { StateInterface } from '../index';



const actions: ActionTree<ProductsStateInterface, StateInterface> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
