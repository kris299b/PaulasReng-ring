<script setup>

</script>

<template>
  <nav class="flex items-center justify-between flex-wrap bg-stone-100 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <RouterLink to="/">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </RouterLink>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-xs lg:flex-grow">
      <ul class="flex flex-row space-x-6 mr-2 text-gray-500 text-xs md:text-sm md:mr-2 lg:mr-2 md:space-x-10 lg:space-x-12 lg:ml-10 lg:text-xs">
        <li>
          <RouterLink to="/">HJEM</RouterLink>
        </li>
        <li>
          <RouterLink to="guide">GUIDE</RouterLink>
        </li>
        <li>
          <RouterLink to="services">JEG TILBYDER</RouterLink>
        </li>
        <li>
          <RouterLink to="about">OM FIRMAET</RouterLink>
        </li>
        <li>
          <RouterLink to="prices">PRISER</RouterLink>
        </li>
        <li>
          <RouterLink to="kontakt">KONTAKT</RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <button class="text-gray-500 bg-transparent hover:bg-transparent border-2 border-gray-300 font-semibold py-2 px-8 rounded-full lg:text-sm lg:text-gray-500">
        BOOK EN TID
      </button>
    </div>
  </div>
</nav>
<RouterView />


</template>



<style scoped>

</style>
