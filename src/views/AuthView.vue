<template lang="">
    <div class="auth">
        <h1>Register</h1>
        <p>{{ user }}</p>
        <p>{{ username }}</p>
        <p>{{ password }}</p>
        <p>{{ email }}</p>
        <form action="">
            <div class="auth-div">
                <label for="">Username</label>
                <input v-model="username" type="text">
            </div >
            <div class="auth-div">
                <label for="">Password</label>
                <input v-model="password" type="password">
            </div>
            <div class="auth-div">
                <label for="">Email</label>
                <input v-model="email" type="email">
            </div>
            <input type="submit" value="Register" @click="addUser">
        </form>
    </div>
</template>
<script setup>
import { ref, reactive, onUpdated } from 'vue'

const username = ref('')
const password = ref('')
const email = ref('')

const user = reactive({
  username, password, email
})
const addUser = async () => {
  try {
    const res = await fetch('http://localhost:3000/Users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
  } catch (err) {
    console.log(err)
  }
}
</script>
<style >
.auth {
  border: 1px solid rgb(22, 24, 26);
  padding: 10px;
  margin: auto;
  background-color: grey;
  color: #fff;
  border-radius: 20px;
  width: fit-content;
}

.auth-div {
  text-align: start;
  margin: 1rem;
}

.auth-div label {
  margin-right: 1rem;
}

input[type="submit"] {
  border: #090909 1px solid;
  padding: 0.5em 0.8em;
  border-radius: 10px;
}
</style>