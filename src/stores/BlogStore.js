import { defineStore } from "pinia";
import axios from "axios";

// DefineStore('Identifier', {})
export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    blogs: [],
    blogDetail: {},
  }),
  getters: {
    fetchBlog(route) {
      return this.blogs.filter((blog) => blog._id === route);
    },
  },
  actions: {
    async fetchBlogs() {
      try {
        const res = await axios.get("http://localhost:3000/blogs");
        this.blogs = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },

    async addBlogs(blog) {
      const { title, author, content, image } = blog;
      try {
        const res = await axios.post(
          "http://localhost:3000/sample",
          {
            title,
            author,
            content,
            image,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        this.blogs.push(blog);
      } catch (err) {
        console.log(err);
      }
    },

    // async getBlog(route) {
    //   try {
    //     const res = await axios.get(
    //       `http://localhost:3000/blogs/${route.params.id}`
    //     );

    //     this.blogDetail = {};
    //     this.blogDetail = res.data.result;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
  },
});
