<template>
  <div class="text-gray-700 bg-white body-font ">
    <div
      class="flex flex-col flex-wrap py-5 mx-auto md:items-center md:flex-row md:w-3/4 lg:w-2/4"
    >
      <!-- <a href="./index.html" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
        <div class="inline-flex items-center">
          <div
            class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-cyan-400 to-lightBlue-500"
          ></div>
          <h2
            class="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-blueGray-500 dark:text-blueGray-200 lg:text-md text-bold lg:mr-8"
          >
            Fiqry choerudin
          </h2>
        </div>
      </a> -->
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto "
      >
        <router-link to="/">
          <a
            class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >Blog</a
          >
        </router-link>
        <router-link to="/work">
          <a
            class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >Work</a
          >
        </router-link>
        <router-link to="/about">
          <a
            class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >About</a
          >
        </router-link>
        <router-link to="/dashboard">
          <a
            class="mr-5 text-sm font-semibold text-gray-600 hover:text-gray-800"
            >Dashboard</a
          >
        </router-link>
      </nav>
    </div>
  </div>
</template>
