<template>
  <!-- <TodoList /> -->
  <!-- <WatchExample /> -->
  <!-- <VModelExample /> -->
  <!-- <TeleportExample /> -->
  <!-- <SuspenseExample /> -->
  <LazyLoad />
</template>

<script>
// import TodoList from './components/TodoList.vue'
// import WatchExample from './components/WatchExample.vue'
// import VModelExample from './components/v-model/VModelExample.vue'
// import TeleportExample from './components/TeleportExample.vue'
// import SuspenseExample from './components/suspense/SuspenseExample.vue';
import LazyLoad from './components/lazy-load-components/LazyLoad.vue';
export default {
  name: 'App',
  components: {
    // TodoList,
    // WatchExample,
    // VModelExample,
    // TeleportExample,
    // SuspenseExample,
    LazyLoad
  }
}
</script>