<template>
    <aside class="bg-black w-72 p-5">
        <button @click="emit('toggle')">Add A Blog</button>
    </aside>
</template>

<script setup>
const emit = defineEmits()
</script>

