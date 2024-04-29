<template>
  
<!-- Navbar -->
<nav id="navbar" class="navbar flex items-center justify-between flex-wrap p-3 fixed top-0 left-0 w-full z-10 shadow-md">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="" class="flex items-center">  
      <RouterLink to="/"> <img src="../src/assets/Paulas-Rengøring-logo-hvid.png" class="h-20 mr-3 md:h-12 lg:h-20 lg:ml-3" alt="" /></RouterLink>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
    </a>
  </div>
  <div class="lg:hidden">
    <button id="navbarToggle" class="navbar-burger flex items-center p-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
        <title>Mobile menu</title>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" id="menuItems">
    <div class="text-xs lg:flex-grow">
      <ul class="flex flex-col space-x-6 mr-2 text-white dark:text-white text-xs md:text-sm md:mr-2 lg:flex-row lg:mr-2 md:space-x-10 lg:space-x-16 lg:ml-10 lg:text-sm">
        <li>
          <RouterLink to="/" class="hover:font-semibold">Hjem</RouterLink>
        </li>
        <li>
          <RouterLink to="guide" class="hover:font-semibold">Guide</RouterLink>
        </li>
        <div class="dropdown"> 
          <button class="dropbtn flex justify-between"> <!-- Removed hover effect from button -->
            Jeg tilbyder
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:ml-2 lg:mt-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div class="dropdown-content">
            <RouterLink to="privatecleaning" class="hover:font-semibold">Privatrengøring</RouterLink> <!-- Added hover effect -->
            <RouterLink to="commercialcleaning" class="hover:font-semibold">Erhvervsrengøring</RouterLink> <!-- Added hover effect -->
          </div>
        </div>
        <li>
          <RouterLink to="about" class="hover:font-semibold">Om firmaet</RouterLink>
        </li>
        <li>
          <RouterLink to="prices" class="hover:font-semibold">Priser</RouterLink>
        </li>
        <li>
          <RouterLink to="contact" class="hover:font-semibold">Kontakt</RouterLink>
        </li>
      </ul>
    </div>
    <div>
      <button class="hover:bg-transparent bg-darkblue dark:bg-darkblue font-semibold py-2 px-8 rounded-full text-xs text-white dark:text-white lg:text-sm lg:mr-6">
        Book din tid
      </button>
    </div>
  </div>
</nav>

<RouterView />


<footer class="bg-lightgray dark:lightgray">
    <div class="mx-4 px-4 py-20 bg-darkblue dark:bg-darkblue md:flex md:items-center md:justify-between lg:py-10 lg:mx-20">
    </div> 
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">  
              <RouterLink to="/"> <img src="../src/assets/logo-paulas-rengøring-blå.png" class="h-14 md:h-12 lg:h-20 lg:ml-3" alt="" /></RouterLink>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
          </div>
          <div class="grid grid-cols-1 gap-6 grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-20 lg:grid-cols-4">
              <div>
                  <h2 class="mb-6 text-xs font-semibold text-darkgray uppercase dark:text-darkgray">information</h2>
                  <ul class="text-xs text-darkgray dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                          <a href="" class="hover:underline">Guide</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline">Priser</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Om firmaet</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mt-5 mb-6 text-xs font-semibold text-darkgray uppercase dark:text-darkgray lg:mt-0">Nyttige links</h2>
                  <ul class="text-xs text-gray-500 dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                          <a href="" class="hover:underline ">Jeg tilbyder</a>
                      </li>
                      <li class="mb-4">
                          <a href="" class="hover:underline ">Privatlivs politik</a>
                      </li>
                      <li>
                          <a href="" class="hover:underline">Kontakt</a>
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
    <div class="px-4 py-6 bg-darkblue dark:bg-darkblue md:flex md:items-center md:justify-between">
        <span class="block text-sm text-center lg:text-center text-white dark:text-white"> © 2024 Paulas rengøring. All Rights Reserved.</span>
    </div>   
</footer>


</template>



<style scoped>
.hidden {
  display: none !important;
}

#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000; 
    border: none; 
    box-shadow: none; 
    background-color: transparent; 
  }

#navbar.scrolled {
    background-color: #bbcadd; 
  }

  /* The dropdown container */
.dropdown {
  position: relative; 
  display: inline-block; 
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 14px;
  border: none;
  outline: none;
  margin: 0;
  cursor: pointer; /* Add cursor pointer for better UX */
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%; 
  left: 0;
  padding-top: 10px;
  min-width: 120px;
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: white;
  padding: 6px 0px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}


</style>


<script setup>
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggle = document.getElementById("navbarToggle");
  const menuItems = document.getElementById("menuItems");

  navbarToggle.addEventListener("click", function() {
    menuItems.classList.toggle("hidden");
  });
});

// Når der crolles, ændres navbaren til en blå farve. 
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });


</script>
