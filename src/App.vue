<template>
  <!-- <TodoList /> -->
  <!-- <WatchExample /> -->
  <!-- <VModelExample /> -->
  <!-- <TeleportExample /> -->
  <!-- <SuspenseExample /> -->
  <!-- <LazyLoad /> -->
  <!-- <VuexExample /> -->
  <div>
    <div><router-link to="/">Home</router-link> <router-link to="/posts">Post</router-link> <router-link to="/create">Create</router-link></div>
    <router-view></router-view>
  </div>
</template>

<script>
// import TodoList from './components/TodoList.vue'
// import WatchExample from './components/WatchExample.vue'
// import VModelExample from './components/v-model/VModelExample.vue'
// import TeleportExample from './components/TeleportExample.vue'
// import SuspenseExample from './components/suspense/SuspenseExample.vue';
// import LazyLoad from './components/lazy-load-components/LazyLoad.vue';
// import VuexExample from './components/VuexExample.vue';
export default {
  name: 'App',
  components: {
    // TodoList,
    // WatchExample,
    // VModelExample,
    // TeleportExample,
    // SuspenseExample,
    // LazyLoad,
    // VuexExample
  }
}
</script>