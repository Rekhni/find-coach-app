import authMutations from './mutations';
import authActions from './actions';
import authGetters from './getters';

export default {
    state() {
        return {
            userId: null,
            token: null,
            didAutoLogout: false,
        }
    },
    mutations: authMutations,
    actions: authActions,
    getters: authGetters
}