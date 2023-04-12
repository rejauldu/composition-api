import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            count: 0,
            list: [1, 2, 3, 4]
        }
    },
    getters: {
        listCount(state) {
            return state.list.length;
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload;
        }
    },
    actions: {
        increment(context, payload) {
            context.increment(context, payload);
        }
    }
});
export default store;