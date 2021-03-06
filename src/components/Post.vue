<template>
  <div>
    <div class="article">
      <article class="container py-10 mx-auto">
        <div class="w-full mx-auto mb-3 text-left md:w-3/4 lg:w-1/2">
          <img
            v-bind:src="base + items.cover.url"
            class="object-cover w-full h-64 bg-center rounded-lg"
            v-bind:alt="items.name"
          />
          <p
            class="mt-6 mb-2 text-xs font-semibold tracking-wider uppercase text-indigo-700"
            v-for="(item, index) in label"
            :key="index"
          >
            {{ items.kategori[index].nama }}
          </p>
          <h1
            class="mb-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl"
            itemprop="headline"
            :title="items.judul"
          >
            {{ items.judul }}
          </h1>
        </div>
        <div class="w-full mx-auto prose md:w-3/4 lg:w-1/2">
          <!-- Artikel List using markdown -->
          <vue-simple-markdown :source="items.artikel"> </vue-simple-markdown>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// Import AXIOS
import axios from "axios";
// config
import config from "../utils/config";

export default {
  data() {
    return {
      id: this.$route.params.id,
      items: [],
      label: [],
      base: `${config.baseUrl}`
    };
  },
  mounted() {
    axios
      .get(`${config.baseUrl}/Blogs/` + this.id)
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
