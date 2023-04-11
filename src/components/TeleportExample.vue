<template>
    <div class="teleport">
        <h1>Teleport Example</h1>
        <Teleport to="#destination">
            <h1>Under destination</h1>
        </Teleport>
    </div>
</template>
<script>
import { Teleport } from 'vue';
components: {
    Teleport
}
export default {
    
}
</script>
<style scoped>
    .teleport {
        border: 5px solid gray;
        width: 500px;
        height: 300px;
        margin: auto;
    }
    h1 {
        text-align: center;
    }
</style>
<style>
    #destination {
        border: 3px solid tomato;
    }
</style>