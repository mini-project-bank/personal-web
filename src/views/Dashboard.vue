<template>
  <div class="container px-2 py-12 mx-auto md:w-3/4 lg:w-2/4">
    <div class="title pb-3">
      <h1 class="text-4xl font-extrabold leading-snug tracking-tight">
        Dashboard
      </h1>
      <p class="text-gray-600">
        This is my personal dashboard, built with Vuejs. I use this dashboard to
        track various metrics across platforms.
      </p>
    </div>
    <!-- Stat card list -->
    <div class="flex flex-col w-full pb-3 border-b">
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <div
          class="metric-card border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full"
        >
          <a
            aria-label="Unsplash Downloads"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/@fiqrychoerudin"
            ><div class="flex items-center text-gray-900 dark:text-gray-100">
              Unsplash Downloads<svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg></div
          ></a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white"
          >
            {{ downloads }}
          </p>
        </div>
        <div
          class="metric-card border border-gray-200 dark:border-gray-800 rounded p-4 max-w-72 w-full"
        >
          <a
            aria-label="Unsplash Views"
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/@fiqrychoerudin"
            ><div class="flex items-center text-gray-900 dark:text-gray-100">
              Unsplash Views<svg
                class="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg></div
          ></a>
          <p
            class="mt-2 text-3xl font-bold spacing-sm text-black dark:text-white"
          >
            {{ views }}
          </p>
        </div>
      </div>
    </div>
    <!-- github commit -->
    <div class="title py-3 border-b">
      <h1 class="text-2xl font-extrabold leading-snug tracking-tight">
        Github commit
      </h1>
      <p class="text-gray-600 pb-4">
        This is my last commit activity on github.
      </p>
      <img class="w-full" src="https://ghchart.rshah.org/228B22/fiqryq" />
    </div>
    <!-- title -->
    <div class="title py-3">
      <h1 class="text-2xl font-extrabold leading-snug tracking-tight">
        My popular github repository
      </h1>
      <p class="text-gray-600 ">
        This is my popular public repository on my github.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4 w-full">
      <div>
        <a href="https://github.com/fiqryq/Pantaucovid-discord">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=graywhite&show_icons=true&repo=Pantaucovid-discord"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/fiqryq/Pantaucovid-Dashboard">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=graywhite&show_icons=true&repo=Pantaucovid-Dashboard"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/fiqryq/Pantaucovid-android">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=graywhite&show_icons=true&repo=Pantaucovid-android"
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/fiqryq/Nabung">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=graywhite&show_icons=true&repo=Nabung"
          />
        </a>
      </div>
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
      downloads: null,
      views: null
    };
  },
  methods: {
    numberFormat(number) {
      return number.toLocaleString("id-ID");
    }
  },
  created() {
    axios
      .get(
        `${config.unSplash_url}/users/fiqrychoerudin/statistics/?client_id=` +
          `${config.apiKey}`
      )
      .then(response => {
        this.downloads = this.numberFormat(response.data.downloads.total);
        this.views = this.numberFormat(response.data.views.total);
      });
  }
};
</script>
<style scoped></style>
