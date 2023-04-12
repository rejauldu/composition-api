<template>
<div>Count: {{ $store.state.count }}</div>
<button @click="increment()">Increment</button>
<div>Double of count:{{ $store.getters.listCount }}</div>
</template>
<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const count = ref(0);
        const store = useStore();
        function increment() {
            // store.commit('increment', 1);
            store.dispatch('increment', 1);
        }
        return {
            count,
            increment,
        }
    }
}
</script>