<template>
  <div class="container px-2 py-12 mx-auto md:w-3/4 lg:w-2/4">
    <!-- title -->
    <div class="title">
      <h1 class="text-4xl font-extrabold leading-snug tracking-tight">
        My work
      </h1>
      <p class="text-gray-600 ">
        This is my personal dashboard, built with Vuejs. I use this dashboard to
        track various metrics across platforms.
      </p>
    </div>
    <!-- Content -->
    <div class="content py-4 pb-7">
      <div
        class="flex items-center border border-gray-200 dark:border-gray-800 rounded p-4"
      >
        <div class="h-8 w-8 ml-2 mr-4">
          <span class="sr-only"></span
          ><svg
            class="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
            viewBox="0 0 267 305"
          >
            <g fill="currentColor">
              <path
                d="M0 296V8.5H231.5V89L170.5 150L258.5 238H174L86 150L170.5 65.5H58V238L0 296Z"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <h4
            class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Suncode
          </h4>
          <p class="leading-5 text-gray-700 dark:text-gray-300">
            Build and deploy a modern Jamstack application using the most
            popular open-source software.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-image {
  width: 100px;
}
</style>
