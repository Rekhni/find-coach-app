import requestsGetters from './getters';
import requestsMutations from './mutations';
import requestsActions from './actions';

export default {
    state() {
        return {
            requests: []      
        }
    },
    getters: requestsGetters,
    mutations: requestsMutations,
    actions: requestsActions
}