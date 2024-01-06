<template lang="">
    <div class="flex flex-col  text-black container bg-white p-3 mt-2 rounded-lg shadow-md">
        <div class="flex justify-center min-h-60">
            <img class="aspect-video" v-if="blogStore.blogDetail.image" :src="`data:image/png;base64,${blogStore.blogDetail.image}`" alt="">
        </div>
        <p class="text-4xl">{{ blogStore.blogDetail.title }}</p>
        <small>By: {{ blogStore.blogDetail.author }}</small>
        <p v-html="blogStore.blogDetail.content"></p>
        {{ blogStore.fetchBlog("65967ae1c722bb9fb2a65542") }}
        <!-- {{ blogStore.blogs }} -->
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from "vue";
import { useBlogStore } from '../../stores/BlogStore'


const route = useRoute()

// Blog store
const blogStore = useBlogStore()

// onMounted(() => {
//     blogStore.getBlog(route)
// })

</script>
