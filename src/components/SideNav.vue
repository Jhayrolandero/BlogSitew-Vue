<template>
    <aside class="fixed top-10 bottom-0 left-0 bg-black w-72 p-5">
        <button @click="emit('toggle')">Add A Blog</button>
    </aside>
</template>

<script setup>
const emit = defineEmits()
</script>

