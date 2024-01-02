<template lang="">
    <div class="text-black">
        <img class="aspect-video" v-if="blog.image" :src="`data:image/png;base64,${blog.image}`" alt="">
        <h1>{{ blog.title }}</h1>
        <small>By: {{ blog.author }}</small>
        <p>{{ blog.content }}</p>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, reactive } from "vue";

const route = useRoute()
const blog = reactive({
    title: '',
    content: '',
    author: '',
    image: ''
});

onMounted(() => {
    getBlog(route)
})

const getBlog = async (route) => {



    await fetch(`http://localhost:3000/blogs/${route.params.id}`)
        .then(result => result.json())
        .then(data => {

            console.log()
            const blogDetail = data.result

            console.log(blogDetail)
            blog.title = blogDetail.title;
            blog.content = blogDetail.content;
            blog.author = blogDetail.author;
            blog.image = blogDetail.image;
        })
        .catch(err => console.log(err))

}
</script>
<style scoped>
h1 {
    font-size: 2rem;
}
</style>