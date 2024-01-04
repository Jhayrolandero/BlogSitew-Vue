<template>
    <div class="container bg-white p-3 mt-3 rounded-md">
        <form action="" method="POST" enctype="multipart/form-data">
            <div class="flex flex-col gap-4">
                <input class="bg-transparent p-3 border-b-2 border-black text-black placeholder:text-gray-400 placeholder:italic
                    focus:outline-none" type="text" placeholder="Title" v-model="title" />
                <PictureInput class="text-black bg-black" ref="pictureInput" accept="image/jpeg,image/png" size="10"
                    button-class="btn" :crop="false" height="300" :hideChangeButton="true" :custom-strings="{
                        upload: '<h1>Bummer!</h1>',
                        drag: 'Thumbnail'
                    }" id="thumbnail">
                </PictureInput>
                <ckeditor class="h-100" :editor="ClassicEditor" v-model="editorData" :config="editorConfig"></ckeditor>
                <button type="button"
                    class="bg-transparent text-black text-lg p-2 font-bold w-full border-t-2 border-t-black border-x-none"
                    @click="addBlog">Upload</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import PictureInput from 'vue-picture-input'

// API endpoint
const url = "http://localhost:3000/sample";

// Data
const title = ref('')
const author = ref('Me')
const pictureInput = ref(null)
const editorData = ref('<blockquote><ol><li>Say Hello World!</li></ol></blockquote><p>&nbsp;</p><p>&nbsp;</p><h1>&nbsp;</h1><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>')

// CKEditor Config for toolbar
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
            title: title.value,
            author: author.value,
            content: editorData.value,
            image: pictureInput.value.file
        }, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        console.log(res.data.text)
    } catch (err) {
        console.log(err)
    }
}
</script>