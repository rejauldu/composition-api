<template>
    <h1>v-model Example</h1>
    <VEditor v-model:name="content" />
    {{ content }}
</template>
<script>
import { ref } from 'vue';
import VEditor from './VEditor.vue'
export default {
    components: {
        VEditor
    },
    setup() {
        const content = ref('');
        return {
            content,
        }
    }
}
</script>