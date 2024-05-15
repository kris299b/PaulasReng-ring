<template>
    <div id="cookiebanner" lang="[#LANGUAGE#]" dir="[#TEXTDIRECTION#]" ng-non-bindable>
      <div id="c-left">
        <p class="c-header">[#TITLE#]</p>
        <p class="c-message">[#TEXT#]</p>
      </div>
      <div id="c-right">
        <a href="javascript:void(0)" @click="submitConsent" class="c-button">OK</a>
      </div>
      <div style="clear:both"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  const submitConsent = () => {
    // Submit consent for necessary categories using Cookiebot API
    Cookiebot.submitCustomConsent(['necessary']); // Adjust category as needed
  };
  
  const hideCookieBanner = () => {
    const cookiebanner = document.getElementById("cookiebanner");
    cookiebanner.style.display = "none";
  };
  
  const showCookieBanner = () => {
    const cookiebanner = document.getElementById("cookiebanner");
    const dialogHeight = parseInt(cookiebanner.offsetHeight);
    let cookieBannerSliderPos = -dialogHeight;
  
    const slideIn = () => {
      if (cookieBannerSliderPos < 0) {
        cookieBannerSliderPos += 4;
        cookiebanner.style.bottom = cookieBannerSliderPos + "px";
        requestAnimationFrame(slideIn);
      } else {
        cookiebanner.style.bottom = "0px";
      }
    };
  
    slideIn();
  };
  
  onMounted(() => {
    showCookieBanner();
  });
  </script>
  
  <style scoped>
  /* Your styles */
  </style>
  