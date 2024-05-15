
<template>
  
<!-- Navbar -->
<nav id="navbar" class="navbar flex items-center justify-between flex-wrap p-3 fixed top-0 left-0 w-full z-10 shadow-md">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
  <a class="flex items-center">  
    <RouterLink to="/"> 
      <img id="navbar-logo" src="../src/assets/PaulasRengøringLogo.png" class="logo-white h-20 md:h-20 lg:h-20 lg:ml-3" alt="" />
    </RouterLink>
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  </div>
  <div class="inline-block lg:hidden">
    <button id="navbarToggle" class="navbar-burger flex items-center p-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-10 h-10">
        <title>Mobile menu</title>
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div class="w-full block flex-grow space-y-1 lg:flex lg:items-center lg:w-auto nav-links" id="menuItems">
    <div class="text-xs lg:flex-grow">
      <ul class="flex flex-col space-y-5 space-x-0 pt-2 mr-2 font-sans text-white dark:text-white text-xs md:space-x-0 md:text-sm md:mr-2 lg:flex-row lg:mr-2 md:space-x-10 lg:space-x-16 lg:ml-10 lg:text-xs lg:tracking-widest lg:space-y-0">
        <li>
          <RouterLink to="/" class="hover:font-semibold">HJEM</RouterLink>
        </li>
        <li>
          <RouterLink to="guide" class="hover:font-semibold">GUIDE</RouterLink>
        </li>
        <div class="dropdown">
          <button id="dropdownToggle" class="dropbtn flex justify-between"> 
            JEG TILBYDER
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 lg:ml-2 lg:mt-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <div id="dropdownContent" class="dropdown-content hidden">
            <RouterLink to="privatecleaning" class="hover:font-semibold">PRIVATRENGØRING</RouterLink> 
            <RouterLink to="commercialcleaning" class="hover:font-semibold">ERHVERVSRENGØRING</RouterLink> 
          </div>
        </div>
        <li>
          <RouterLink to="about" class="hover:font-semibold">OM FIRMAET</RouterLink>
        </li>
        <li>
          <RouterLink to="prices" class="hover:font-semibold">PRISER</RouterLink>
        </li>
        <li>
          <RouterLink to="contact" class="hover:font-semibold">KONTAKT</RouterLink>
        </li>
      </ul>
    </div>
    <div class="pt-2 lg:pt-0">
      <RouterLink to="contact"> 
        <button class="flex hover:bg-transparent bg-darkblue dark:bg-darkblue font-normal lg:font-normal py-2 px-6 rounded-full lg:mr-6 lg:py-2 lg:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="white" class="w-6 h-6 lg:w-5 lg:h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <p class="text-xs text-white pt-1 pl-2 dark:text-white lg:text-sm lg:pt-0 lg:pl-2 lg:tracking-wider">Kontakt mig</p>
        </button>
      </RouterLink>
    </div>
  </div>
</nav>

<RouterView />

<footer class="bg-lightgray dark:lightgray">
    <div class="mx-4 px-4 py-8 bg-darkblue dark:bg-darkblue flex md:items-center md:px-16 md:justify-between lg:px-44 lg:py-5 lg:mx-20">
      <div class="col flex columns-1 space-x-8 h-6 md:space-x-48 md:columns-3 lg:h-16 lg:columns-3 lg:space-x-56">
        <div class="col font-sans flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#fdfdfd">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 1.99 2H20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <p class="text-white dark:text-white md:pl-1 md:text-sm lg:text-base lg:text-sm lg:pl-2 lg:tracking-wider">
            Email
          </p>
        </div>
        <div class="col font-sans flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
          </svg>
          <p class="text-white dark:text-white md:pl-1 md:text-sm lg:text-base lg:text-sm lg:pl-2 lg:tracking-wider">
            Tlf nummer
          </p>
        </div>
        <div class="col font-sans flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" style="fill:#000000;">
            <g fill="#fdfdfd" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <g transform="scale(8.53333,8.53333)">
                <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z"></path>
              </g>
            </g>
          </svg>
          <p class="text-white dark:text-white md:pl-1 md:text-sm lg:text-base lg:text-sm lg:pl-2 lg:tracking-wider">
            Facebook
          </p>
        </div>
      </div>
    </div> 
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="" class="flex items-center">  
              <RouterLink to="/"> <img src="../src/assets/logodesign-paulas-rengøring.png" class="h-20 md:h-20 lg:h-20 lg:ml-3" alt="" /></RouterLink>
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
          </div>
          <div class="grid grid-cols-1 gap-6 grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-20 lg:grid-cols-4">
              <div>
                  <h2 class="font-sans mb-6 text-xs md:pt-5 font-semibold text-darkgray uppercase dark:text-darkgray lg:pt-0 lg:tracking-wider">information</h2>
                  <ul class="text-xs text-darkgray dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                        <RouterLink to="guide" class="hover:font-semibold">Guide</RouterLink>
                      </li>
                      <li class="mb-4">
                        <RouterLink to="prices" class="hover:font-semibold">Priser</RouterLink>
                      </li>
                      <li class="mb-4">
                        <RouterLink to="about" class="hover:font-semibold">Om firmaet</RouterLink>
                      </li>
                      <li class="mb-4">
                        <RouterLink to="privatecleaning" class="hover:font-semibold">Privatrengøring</RouterLink> 
                      </li>
                      <li class="">
                        <RouterLink to="commercialcleaning" class="hover:font-semibold">Erhvervsrengøring</RouterLink> 
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="font-sans mt-5 mb-6 text-xs font-semibold text-black uppercase dark:text-black lg:mt-0 lg:tracking-wider">Nyttige links</h2>
                  <ul class="text-xs text-gray-500 dark:text-darkgray font-medium lg:text-xs">
                      <li class="mb-4">
                        <RouterLink to="privacypolicy">
                          <a href="" class="hover:underline ">Privatlivs politik</a>
                        </RouterLink> 
                      </li>
                      <li>
                          <a href="" class="hover:underline">Kontakt</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="font-sans mt-5 mb-6 text-xs font-semibold text-black uppercase dark:text-black lg:mt-0 lg:tracking-wider">Telefontider</h2>
                  <div class="text-xs text-gray-500 dark:text-darkgray font-medium lg:text-xs">
                    <div class="flex justify-start gap-5 md:gap-x-5 lg:gap-12 lg:justify-between">
                      <p class="mb-4">
                        Mandag
                      </p>
                      <p class="mb-4">
                        09.00 - 14.00
                      </p>
                    </div>
                    <div class="flex justify-start gap-7 lg:gap-12 lg:justify-between">
                      <p class="mb-4">
                        Tirsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-start gap-6 lg:gap-12 lg:justify-between">
                      <p class="mb-4">
                        Onsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-start gap-6 lg:gap-12 lg:justify-between">
                      <p class="mb-4">
                        Torsdag
                      </p>
                      <p class="mb-4">
                        09.00 - 15.00
                      </p>
                    </div>
                    <div class="flex justify-start gap-7 lg:gap-12 lg:justify-between">
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
    <div class="px-4 py-6 text-center bg-darkblue dark:bg-darkblue lg:text-center">
         <p class="text-white text-xs lg:text-white lg:text-xs">© 2024 Paulas rengøring. All Rights Reserved.</p>
    </div>   
</footer>

</template>



<style scoped>

#navbar.scrolled img {
 color:#748ab2;
}

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
    background-color: #fdfdfd; 
    padding-bottom: 55px;
  }

#navbar.scrolled a {
    color: #444444; 
  }

  /* The dropdown container */
.dropdown {
  position: relative; 
  display: inline-block; 
}


/* Dropdown button */
.dropdown .dropbtn {
  font-size: 12px;
  border: none;
  outline: none;
  margin: 0;
  color: white;
  cursor: pointer; /* Add cursor pointer for better UX */
}

/* Dropdown button scrolled */
#navbar.scrolled .dropdown .dropbtn {
  color: #444444;
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

/* Small screen */
@media screen and (max-width: 915px) {
  /*navbar white box */
  .nav-links {
    background-color: white;
    height: 50vh; 
    padding: 20px 10px; 
    border-radius: 5px; 
  }
/*navbar links */
 #navbar a {
    color: #444444;
    padding: 5px;
  }

/*navbar link 'jeg tilbyder' */
  .dropdown .dropbtn {
  color: #444444;
  padding-left: 5px;
}

/* Show the dropdown content on small screens */
.dropdown-content.hidden {
    display: none;
  }

}

/* Dropdown content */
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 10px;
  min-width: 120px;
  z-index: 1;
}

/* Show the dropdown content */
.dropdown-content.show {
  display: block;
}

</style>


<script>
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

  document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbarToggle');
  const navLinks = document.querySelector('.nav-links');

  navbarToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('navbar-logo');
  const scrolledClass = 'scrolled';

  // Initially set the logo to white
  logo.src = "../src/assets/PaulasRengøringLogo.png";
  
  // Add event listener for scrolling
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add(scrolledClass);
      // Change logo to blue if it's not already blue
      if (!logo.src.includes("blå")) {
        logo.src = "../src/assets/logodesign-paulas-rengøring.png";
      }
    } else {
      navbar.classList.remove(scrolledClass);
      // Change logo to white if it's not already white
      if (!logo.src.includes("hvid")) {
        logo.src = "../src/assets/PaulasRengøringLogo.png";
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownContent = document.getElementById("dropdownContent");

  dropdownToggle.addEventListener("click", function() {
    dropdownContent.classList.toggle("hidden");
  });
});

</script>
