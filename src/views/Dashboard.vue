<template>
  <div class="container px-2 py-12 mx-auto md:w-3/4 lg:w-2/4">
    <div class="title pb-5 border-b">
      <h1 class="text-4xl font-extrabold leading-snug tracking-tight">
        Dashboard
      </h1>
      <p class="text-gray-600">
        This is my personal dashboard, built with Vuejs. I use this dashboard to
        track various metrics across platforms.
      </p>
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
    <div class="grid grid-cols-2 gap-4 w-full px-2">
      <div>
        <a href="">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=dark&show_icons=true&repo=Pantaucovid-discord"
          />
        </a>
      </div>
      <div>
        <a href="">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=dark&show_icons=true&repo=Pantaucovid-Dashboard"
          />
        </a>
      </div>
      <div>
        <a href="">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=dark&show_icons=true&repo=Pantaucovid-android"
          />
        </a>
      </div>
      <div>
        <a href="">
          <img
            class="w-full"
            src="https://github-readme-stats.vercel.app/api/pin/?username=fiqryq&theme=dark&show_icons=true&repo=Nabung"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
