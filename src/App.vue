<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Footer
  }
};
</script>
