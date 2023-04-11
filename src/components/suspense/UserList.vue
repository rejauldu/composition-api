<template>
    <h1>User List</h1>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
</template>
<script>
import axios from 'axios';
import { ref } from 'vue';

    export default {
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