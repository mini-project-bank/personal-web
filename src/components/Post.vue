<template>
  <div>
    <article
      class="container px-4 py-24 mx-auto"
      itemid="#"
      itemscope
      itemtype="http://schema.org/BlogPosting"
    >
      <div
        class="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2"
        v-for="item in items"
        :key="item"
      >
        <img
          src="/brand/og.png"
          class="object-cover w-full h-64 bg-center rounded-lg"
          alt="Kutty"
        />
        <p
          class="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary"
        >
          Development
        </p>
        <h1
          class="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
          itemprop="headline"
          title="Rise of Tailwind - A Utility First CSS Framework"
        >
          {{ item.judul }}
        </h1>
        <div class="flex mb-6 space-x-2">
          <a class="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#"
            >CSS</a
          >
          <a class="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#"
            >Tailwind</a
          >
          <a class="text-gray-900 bg-gray-100 badge hover:bg-gray-200" href="#"
            >AlpineJS</a
          >
        </div>
      </div>

      <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
        <p>
          What if there is an easy way to achieve responsive UI without using
          any UI kit? Can we create new and fresh designs for every project with
          a CSS framework? Enter Tailwind CSS, will this be the perfect CSS
          framework, well let’s find out.
        </p>
        <p>
          Tailwind is a utility-first CSS framework, the keyword being
          ‘utility’. It is basically a set of classes that you can use in your
          HTML.
        </p>
        <pre>
            .bg-purple-700 {
            background-color: #6b46c1;
            }

            .px-4 {
            padding-top: 1rem;
            padding-bottom: 1rem;
            }</pre
        >
        <p>
          Therefore, we don’t have to write any custom CSS to get this button.
          This can be heavily extended to build whole web applications without
          the need for any other styles apart from a tailwind.
        </p>
        <p>...</p>
      </div>
    </article>
  </div>
</template>
<script>
// Import AXIOS
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

const url = "http://localhost:1337/Blogs";

export default {
  data() {
    return {
      judul: this.$route.param.index,
      items: {}
    };
  },
  created() {
    axios.get(url).then(response => {
      this.items = response.data;
    });
  }
};
</script>
