<template lang="">
  <Suspense>
    <template #default>
      <div class="flex">
        <SideNav @toggle="togglePost"/>
        <div class='mx-auto  col-span-2 grid gap-5 grid-cols-1'>
          <BlogCard
            v-for="blog in blogStore.blogs"
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
</template>
<script setup>

import { onMounted, defineAsyncComponent } from "vue";

// Components
import SideNav from "../components/SideNav.vue";
import BlogCard from "@/components/blog/BlogCard.vue";

import { useBlogStore } from '../stores/BlogStore'

// Blog store
const blogStore = useBlogStore()

// Mounted
onMounted(async () => {
  blogStore.fetchBlogs()
});

const previewContent = ((content) => {
  return content.substr(0, 200) + '...'
})

const InputBlog = defineAsyncComponent(() =>
  import("../components/blog/InputBlog.vue"),
)

</script>
