<template>
    <h1>VEditor</h1>
    <input type="text" :value="name" @input="updateName" />
</template>
<script>

export default {
    props: {
      name: String,  
    },
    setup(props, context) {
        function updateName(event) {
            context.emit('update:name', event.target.value);
        }
        return {
            updateName
        }
    }
}
</script>