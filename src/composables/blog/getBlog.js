// composables/blog/getBlog.js
import { ref } from "vue";

export async function getBlog(url) {
  const blogs = ref([]);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.log("Error fetching blogs");
    } else {
      const data = await res.json();
      blogs.value = data;
    }
  } catch (err) {
    console.error(err);
  }
  return { blogs };
}
