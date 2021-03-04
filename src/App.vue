<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "Home",
  components: {
    Nav
  }
};
</script>
