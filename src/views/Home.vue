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
import JSEncrypt from "jsencrypt";

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

        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
gwQco1KRMDSmXSMkDwIDAQAB`);
        var encrypted = encrypt.encrypt("목요일");
        console.log("encrypted" + encrypted);
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
