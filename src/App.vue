<template>
  <nav class="navbar flex items-center justify-between flex-wrap p-3 absolute top-0 left-0 w-full z-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="" class="flex items-center">  
      <RouterLink to="/"> <img src="../src/assets/PaulasRengøringlogo.png" class="h-10 mr-3 md:h-12 lg:h-20 lg:ml-3" alt="" /></RouterLink>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
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
      <ul class="flex flex-row space-x-6 mr-2 text-white text-xs md:text-sm md:mr-2 lg:mr-2 md:space-x-10 lg:space-x-12 lg:ml-10 lg:text-sm">
        <li>
          <RouterLink to="/">Hjem</RouterLink>
        </li>
        <li>
          <RouterLink to="guide">Guide</RouterLink>
        </li>
        <li>
          <RouterLink to="services">Jeg tilbyder</RouterLink>
        </li>
        <li>
          <RouterLink to="about">Om firmaet</RouterLink>
        </li>
        <li>
          <RouterLink to="prices">Priser</RouterLink>
        </li>
        <li>
          <RouterLink to="kontakt">Kontakt</RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <button class="hover:bg-transparent bg-white font-semibold py-2 px-8 rounded-full text-xs text-black lg:text-xs lg:text-black lg:mr-3">
        BOOK DIN TID
      </button>
    </div>
  </div>
</nav>
<RouterView />


</template>



<style scoped>
.navbar {
  background-color: transparent; /* Set background color to transparent */
}
</style>


<script setup>

</script>
