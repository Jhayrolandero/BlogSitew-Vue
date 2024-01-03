<template>
    <div class="container bg-black p-3 mt-3 rounded-md">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="flex flex-col gap-4">
                <input class="bg-black p-3 border-b-2 border-orange text-orange" type="text" placeholder="Title"
                    v-model="title" />
                <PictureInput class="text-orange bg-black" ref="pictureInput" accept="image/jpeg,image/png" size="10"
                    button-class="btn" :crop="false" height="300" :hideChangeButton="true" :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Thumbnail'
                    }" @change="onChange" id="thumbnail">
                </PictureInput>
                <ckeditor class="h-100" :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
                <button class="bg-black text-orange text-lg p-2">Upload</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import PictureInput from 'vue-picture-input'

const url = "http://localhost:3000/sample";

const pictureInput = ref('')
const editorData = ref('<p>Say Hello World!</p>')
const inputText = ref('')
const editorConfig = ref({
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    }
})


async function addBlog() {
    try {
        const res = await axios.post(url, {
            editorData: editorData.value,
            inputText: inputText.value
        })

        console.log(res.data.text)
    } catch (err) {
        console.log(err)
    }
}

</script>