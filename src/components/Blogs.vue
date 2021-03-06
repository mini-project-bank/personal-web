<template>
  <div class="blogs">
    <section class="container w-full px-5 py-4 mx-auto md:w-3/4 lg:w-2/4">
      <!-- Searchbar -->
      <div class="mb-5 text-left md:text-center">
        <div class="form-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            v-model="search"
            class="form-input"
            placeholder="Search for posts..."
          />
        </div>
      </div>
      <!-- End Searchbar -->
      <!-- Item blog post -->
      <div
        class="flex flex-col space-y-12 divide-y divide-gray-200"
        v-for="(item, index) in filterBlog"
        :key="index"
      >
        <div>
          <p class="pt-5 mb-3 text-sm font-normal text-gray-500">
            Published
            <span class="font-bold text-sm ml-1">
              {{ item.published_at | moment("dddd, MMMM Do YYYY") }}
            </span>
          </p>
          <h1
            class="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl"
          >
            <a href="#" class="text-black hover:text-gray-800">
              <router-link :to="'/post/' + item.id">
                {{ item.judul }}
              </router-link></a
            >
          </h1>
          <!-- Image section -->
          <div class="mb-5 text-left md:text-center">
            <img
              v-bind:src="base + item.cover.url"
              class="object-cover w-full h-80 bg-center rounded-lg"
              :alt="item.cover.name"
            />
          </div>
          <!-- end image section -->
          <p class="mb-4 text-base font-normal text-gray-600 artikel">
            {{ item.artikel }}
          </p>
          <router-link :to="'/post/' + item.id">
            <a class="btn btn-light btn-sm">
              Continue Reading
            </a>
          </router-link>
        </div>
      </div>
    </section>
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
      items: [],
      search: "",
      base: `${config.baseUrl}`
    };
  },
  created() {
    axios.get(`${config.baseUrl}/Blogs`).then(response => {
      this.items = response.data;
    });
  },
  computed: {
    filterBlog: function() {
      return this.items.filter(item => {
        return item.judul.toLowerCase().match(this.search);
      });
    }
  }
};
</script>
<style scoped>
.artikel {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 50px; /* fallback */
  -webkit-line-clamp: 3; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
