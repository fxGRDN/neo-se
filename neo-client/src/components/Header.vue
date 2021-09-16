<template>
    <div class="header">
        <img src="../assets/logo.png" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Header",
})
</script>

<style scoped>

    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    img {
        height: 25rem;
    }
</style>