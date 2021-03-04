<template>
  <div>
    <div class="article">
      <article class="container px-4 py-24 mx-auto">
        <div class="w-full mx-auto mb-12 text-left md:w-3/4 lg:w-1/2">
          <img
            :src="base + items.cover.url"
            class="object-cover w-full h-64 bg-center rounded-lg"
            :alt="items.name"
          />
          <p
            class="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-primary"
            v-for="(item, index) in label"
            :key="index"
          >
            {{ items.kategori[index].nama }}
          </p>
          <h1
            class="mb-3 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            itemprop="headline"
            :title="items.judul"
          >
            {{ items.judul }}
          </h1>
          <div class="flex mb-6 space-x-2">
            <a
              class="text-gray-900 bg-gray-100 badge hover:bg-gray-200"
              href="#"
              v-for="(item, index) in label"
              :key="index"
              >{{ item.children[index].nama }}</a
            >
          </div>
        </div>

        <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <p>
            {{ items.artikel }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// Import AXIOS
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

export default {
  data() {
    return {
      id: this.$route.params.id,
      items: {},
      label: [],
      base: "http://localhost:1337"
    };
  },
  mounted() {
    axios
      .get("http://localhost:1337/Blogs/" + this.id)
      .then(response => {
        this.items = response.data;
        this.label = response.data.kategori;
      })
      .catch(error => {
        console.log(error);
      })
      .finally();
  }
};
</script>
