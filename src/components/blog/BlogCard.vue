<template lang="">
    <div class="max-w-3xl bg-white border-s-8 border-1 border-rose-600 border-s-orange  border-solid rounded-md shadow-xl ">
      <div class="grid grid-cols-3">
        <div class="flex justify-center">
          <img v-if="image" class="object-fill" :src="`data:image/png;base64,${image}`" alt="">
          <img v-else  class="object-fill" src="../../assets/images.jpg" alt="">
        </div>
        <div class="p-1 col-span-2 flex flex-col justify-start relative">
            <h4 class="text-2xl">{{ title }}</h4>
            <small class="text-sm text-gray-400">By: {{ author }} </small>
            <p class="text-sm" v-html="content"></p>
            <button class="absolute bottom-1 right-1 text-sm text-orange">
              <router-link :to="`/blogs/${_id}`">Read More ></router-link>
            </button>
        </div>
      </div>
    </div>
</template>
<script setup>
defineProps(["title", "author", "content", "_id", "image"]);

const deleteBlog = async (id) => {
  try {
    const res = await fetch("http://localhost:3000/blogs/" + id, {
      method: "DELETE",
    });

    if (!res.ok) {
      console.log("Error fetching blogs");
    } else {
      const data = await res.json();
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
};
</script>
