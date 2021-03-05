<template>
  <div class="about">
    <div class="container px-2 py-12 mx-auto md:w-3/4 lg:w-2/4">
      <!-- Title -->
      <div class="about pb-5 border-b">
        <h1 class="text-4xl font-extrabold leading-snug tracking-tight">
          About me
        </h1>
        <p class="text-gray-600">
          This is my personal dashboard, built with Vuejs. I use this dashboard
          to track various metrics across platforms.
        </p>
      </div>
      <!-- title -->
      <div class="title py-3">
        <h1 class="text-2xl font-extrabold leading-snug tracking-tight">
          Timeline
        </h1>
        <p class="text-gray-600 ">
          This is timeline for my achivement.
        </p>
      </div>
      <!-- timeline -->
      <div class="timeline">
        <ul>
          <li class="mb-4 ml-2">
            <div
              class="flex items-center mb-2 text-green-700 dark:text-green-300"
            >
              <span class="sr-only">Check</span
              ><svg class="h-4 w-4 mr-2" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </g>
              </svg>
              <p class="font-medium text-gray-900 dark:text-gray-100">
                Get my first job
              </p>
            </div>
            <p class="text-gray-700 dark:text-gray-400 ml-6">
              I'm excited to help grow the Next.js community and continue
              building the optimal workflow for front-end developers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";
Vue.use(VueSimpleMarkdown);

export default {
  data() {
    return {};
  }
};
</script>
