<template>
  <div class="about">

    <div class="bg-black">
      <div v-for="blog in sample.blogs">

        <h1>{{ blog.title }}</h1>
        <p>{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useBlogStore } from '../stores/BlogStore'


const sample = useBlogStore()


</script>