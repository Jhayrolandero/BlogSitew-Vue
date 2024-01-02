<template lang="">
    <div class="modal">
      <div class="add-blog">

        <div class="modal-header">
          <h2>Post a Blog</h2>
          <small @click="$emit('close')">X</small>
        </div>

        <div class="modal-body">
          <form action="" method="POST" enctype="multipart/form-data">
            <input class="blog-form" type="text" placeholder="Title" v-model="title"/>
            <textarea class="blog-form" cols="30" rows="10" v-model="content" placeholder="Content"></textarea>
            <input class="blog-form" type="text" v-model="author" placeholder="Author"/>
            <input type="file" ref="fileInput" @change="selectFile">
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            @click="addBlog" 
          >
            Add Blog
          </button>          
        </div>

      </div>
    </div>
  </template>

<script setup>

/*
=========================
        Imports
=========================
*/
import { ref, reactive, defineProps } from "vue";
import axios from 'axios';
const url = "http://localhost:3000/blogs";

// States
let title = ref("");
let author = ref("");
let content = ref("");
const fileInput = ref(null)
const uploadedFile = ref(null)
const emit = defineEmits();

// Add blog
async function addBlog() {
  try {
    const res = await axios.post(url, {
      title: title.value,
      author: author.value,
      content: content.value,
      image: fileInput.value.files[0]
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log(res.data.text)
    emit('close')
    emit('fetch')

  } catch (err) {
    console.log(err)
  }
}


// Showfile picture input
const selectFile = () => {
  const file = fileInput.value.files[0]
  uploadedFile.value = { file, url: URL.createObjectURL(file) }
}
</script>
<style >
:root {
  --black: rgb(22, 24, 26)
}

.add-blog h2 {
  font-size: 2rem;
  text-align: start;
  display: inline;
}

.add-blog small {
  font-size: 2rem;
  cursor: pointer;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  padding: 1em;
}

.add-blog {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 80%;
  max-width: 1080px;
  background-color: var(--black);
  gap: 1em;
}

.add-blog form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: var(--black);
}

.add-blog .blog-form {
  border: var(--black) solid 1px;
  padding: 0.8em 0.5em;
  border-radius: 10px;
}

.add-blog button {
  background-color: #fff;
  color: var(--black);
  padding: 0.8em 0.5em;
  width: fit-content;
  border: var(--black) solid 1px;
  border-radius: 15px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}

.modal-footer {
  display: flex;
  justify-content: end;
}
</style>