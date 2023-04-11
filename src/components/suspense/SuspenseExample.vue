<template>
<h1>Suspense Example</h1>
<div v-if="errMsg">{{ errMsg }}</div>
<Suspense v-else>
    <template #default>
        <UserList />
    </template>
    <template #fallback>
        <div>Loading...</div>
    </template>
</Suspense>

</template>
<script>
import { Suspense, onErrorCaptured, ref } from 'vue';
import UserList from './UserList.vue';
export default {
    components: { UserList, Suspense },
    setup() {
        const errMsg = ref(null);
        onErrorCaptured( () => {
            errMsg.value = 'Something Went Wrong!'
        });
        return {
            errMsg
        }
    }
}
</script>