import { Module } from 'vuex';
import { ProductsStateInterface } from 'components/models';
import { StateInterface } from '../index';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const productsModule: Module<ProductsStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default productsModule;
