<template>
  <div class="about">
    <div class="container px-5 py-12 mx-auto md:w-3/4 lg:w-2/4">
      <!-- Title -->
      <div class="about pb-5 border-b">
        <h1 class="text-4xl font-extrabold leading-snug tracking-tight">
          About me
        </h1>
        <p class="text-gray-600 pb-4">
          Hello , i'm fiqry. i'm a developer and amateur photographer. currently
          learning everything.<br />
          im from banten , indonesia and now live in bandung , currently working
          as frontend developer on pusat teknologi informasi telkom university.
        </p>
        <a
          href="https://raw.githubusercontent.com/fiqryq/fiqryq/ff9daa24c7431c83158d80fc3402ad5daab1ef1f/Curriculum%20Vitae/CV.pdf"
          class="btn btn-icon btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-1"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line></svg
          >Resume
        </a>
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
        <h3
          class="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100"
        >
          2021
        </h3>
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
                Get my first job ✨
              </p>
            </div>
            <p class="text-gray-700 dark:text-gray-400 ml-6">
              Finally i get my job in 2021 currently i working as junior
              frontend dev in telkom university.
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
