<template>

  <!-- Navbar -->
  <nav class="navbar flex items-center justify-between flex-wrap p-3 absolute top-0 left-0 w-full z-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="" class="flex items-center">  
      <RouterLink to="/"> <img src="../src/assets/PaulasRengøringlogo.png" class="h-10 mr-3 md:h-12 lg:h-20 lg:ml-3" alt="" /></RouterLink>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
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
      <button class="hover:bg-transparent bg-white dark:bg-white font-semibold py-2 px-8 rounded-full text-xs text-black lg:text-xs lg:text-black lg:mr-3">
        BOOK DIN TID
      </button>
    </div>
  </div>
</nav>
<RouterView />



<footer class="bg-lightgray dark:lightgray">
    <div class="mx-4 px-4 py-20 bg-lightblue dark:bg-lightblue md:flex md:items-center md:justify-between lg:py-10 lg:mx-20">
    </div> 
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">  
              <RouterLink to="/"> <img src="../src/assets/logodesign-farve.png" class="h-14 md:h-12 lg:h-20 lg:ml-3" alt="" /></RouterLink>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
          </div>
          <div class="grid grid-cols-1 gap-6 grid-cols-3 lg:gap-20 lg:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-xs font-semibold text-darkgray uppercase dark:text-darkgray">information</h2>
                  <ul class="text-xs text-darkgray dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Guide</a>
                      </li>
                      <li class="mb-4">
                          <a href="https://tailwindcss.com/" class="hover:underline">Priser</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Om firmaet</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mt-5 mb-6 text-xs font-semibold text-darkgray uppercase dark:text-darkgray lg:mt-0">Nyttige links</h2>
                  <ul class="text-xs text-gray-500 dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Jeg tilbyder</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Privatlivs politik</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mt-5 mb-6 text-xs font-semibold text-gray-900 uppercase dark:text-darkgray lg:mt-0">Telefontider</h2>
                  <div class="text-xs text-gray-500 dark:text-darkgray font-medium lg:text-xs">
                    <div class="flex justify-between lg:gap-12">
                      <p class="mb-4">
                        Mandag
                      </p>
                      <p class="mb-4">
                        09.00 - 14.00
                      </p>
                    </div>
                    <div class="flex justify-between lg:gap-12">
                      <p class="mb-4">
                        Tirsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-between lg:gap-12">
                      <p class="mb-4">
                        Onsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-between lg:gap-12">
                      <p class="mb-4">
                        Torsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-between lg:gap-12">
                      <p class="mb-4">
                        Fredag
                      </p>
                      <p class="mb-4">
                        10.00 - 14.00
                      </p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>  
    <div class="px-4 py-6 bg-lightblue dark:bg-lightblue md:flex md:items-center md:justify-between">
        <div class="text-sm text-center text-darkgray dark:text-gray-300 lg:text-xs">
          © 2024 Paulas rengøring. All Rights Reserved.
        </div> 
    </div>   
</footer>


</template>



<style scoped>
.navbar {
  background-color: transparent; 
}
</style>


<script setup>

</script>
