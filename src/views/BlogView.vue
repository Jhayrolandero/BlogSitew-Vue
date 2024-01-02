<template lang="">
  <Suspense>
    <template #default>
      <div class="flex">
        <SideNav @toggle="togglePost"/>
        <div class='mx-auto  col-span-2 grid gap-5 grid-cols-1'>
          <BlogCard
            v-for="blog in blogs"
            :key="blog._id"
            :title="blog.title"
            :content="previewContent(blog.content)"
            :author="blog.author"
            :_id="blog._id"
            :image="blog.image"
            class="blog-details"
          />
        </div>
      </div>
    </template>
    <template #fallback>
      <div>
        Loading....
      </div>
    </template>
  </Suspense>

  <Suspense v-if="showPost">
    <template #default>
      <InputBlog @close="togglePost" @fetch='fetchBlogs'/>
    </template>
    <template #fallback>Loading....</template>
  </Suspense>


    <button @click="togglePost" class="toggleBtn">+</button>
    
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import SideNav from "../components/SideNav.vue";

import axios from 'axios'

import BlogCard from "@/components/blog/BlogCard.vue";
import { getBlog } from "../composables/blog/getBlog";

const blogs = ref([]);
const showPost = ref(false)
const url = ref('http://localhost:3000/blogs')

onMounted(async () => {
  fetchBlogs()
});

const previewContent = ((content) => {
  return content.substr(0, 200) + '...'
})

const togglePost = () => {
  showPost.value = !showPost.value
}


const fetchBlogs = async () => {
  try {
    const res = await axios.get(url.value)
    blogs.value = res.data.result
    console.log(blogs.value)
  } catch (err) {
    console.log(err)
  }
}

const InputBlog = defineAsyncComponent(() =>
  import("../components/blog/InputBlog.vue"),
)

</script>
