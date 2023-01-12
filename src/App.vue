<template>
  <nav-bar></nav-bar>

  <router-view v-if="hasData" />
  <div v-else class="mx-auto changeHeight align-middle">
    <h1>Loading...</h1>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import NavBar from "./components/NavBar.vue";

const store = useStore();
const hasData = ref(false);

onMounted(() => {
  fetch("https://fakestoreapi.com/products/")
    .then((res) => res.json())
    .then((json) => {
      store.state.data = json;
      hasData.value = true;
    })
    .catch(() => console.log("Some Error Occured"));
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.changeHeight {
  height: 100vh;
}
</style>
