<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="submitForm">a</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import { registerUser } from "@/api/index";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    async submitForm() {
      try {
        // 비즈니스 로직
        const data = await registerUser();
        console.table(data);
      } catch (error) {
        // 에러 핸들링할 코드
        console.log(error.response);
      } finally {
        console.log("awalys");
      }
    },
  },
};
</script>
