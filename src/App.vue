<template>
  <!-- <TodoList /> -->
  <!-- <WatchExample /> -->
  <!-- <VModelExample /> -->
  <!-- <TeleportExample /> -->
  <SuspenseExample />
</template>

<script>
// import TodoList from './components/TodoList.vue'
// import WatchExample from './components/WatchExample.vue'
// import VModelExample from './components/v-model/VModelExample.vue'
// import TeleportExample from './components/TeleportExample.vue'
import SuspenseExample from './components/suspense/SuspenseExample.vue';
export default {
  name: 'App',
  components: {
    // TodoList,
    // WatchExample,
    // VModelExample,
    // TeleportExample,
    SuspenseExample
  }
}
</script>