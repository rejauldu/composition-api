<template>
<h1>Watch example</h1>
Name: <input type="text" v-model="name" /> {{ name }}<br/>
Email: <input type="text" v-model="email" /> {{ email }}
</template>
<script>
import { reactive, ref, watch } from 'vue';

export default {
    setup() {
        const name =ref('');
        const email = ref('');
        watch([name, email], ([newName, newEmail], [prevName, prevEmail]) => {
            console.log('name', name.value);
            console.log('email', email.value);
        });
        return {
            name,
            email
        }
    }
}
</script>
<style>
</style>