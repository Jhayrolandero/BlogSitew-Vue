<template lang="">
  <div class="flex flex-row justify-between bg-black sticky top-0 left-0 right-0 z-50 p-3  text-lg text-orange">
    <nav>

      <router-link to="/"><i class="fa-solid fa-book"></i> Bludder</router-link>
    </nav>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/blogs">Blogs</router-link> 
    </nav>
  </div>
</template>
<script>
export default {};
</script>
