import Settings from 'electron-store';
import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const settings = new Settings();

const state = {
    dark: settings.get('dark'),
    input: ''
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
});