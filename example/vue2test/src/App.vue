<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="click">替换英文</button>
    <button @click="click2">替换中文</button>
    <MySelect />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { locale } from "tryuirollup";
import en from "tryuirollup/lib/locale/en";
import cn from "tryuirollup/lib/locale/cn";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    click() {
      locale.use(en);
    },
    click2() {
      locale.use(cn);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
