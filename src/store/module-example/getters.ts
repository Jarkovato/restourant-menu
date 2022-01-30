import { GetterTree } from 'vuex';
import { ProductsStateInterface } from 'components/models';
import { StateInterface } from '../index';


const getters: GetterTree<ProductsStateInterface, StateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
