<template>
    <h1>User List</h1>
        <User v-for="user in users" :key="user.id" :user="user"/>
</template>
<script>
import axios from 'axios';
import { defineAsyncComponent, ref } from 'vue';
const User = defineAsyncComponent(() => import('./SingleUser.vue' /*webpackChunkName: 'user'*/));
    export default {
        components: {
            User,
        },
        async setup() {
            const users = ref(null);
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            users.value = response.data;
            return {
                users,
                response
            }
        }
    }
</script>