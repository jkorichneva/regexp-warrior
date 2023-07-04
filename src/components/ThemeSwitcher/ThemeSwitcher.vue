<script setup>
import './ThemeSwitcher.css'
function changeTheme(e) {
  console.log(e)
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
</script>

<template>
  <div class="main-wrapper">
    <div class="text" id="light-theme-text">Light</div>
    <!-- BEGIN :: theme switch wrapper-->
    <div class="theme-switch-wrapper">
      <label for="theme-btn">
        <input type="checkbox" id="theme-btn" @click="changeTheme" />
        <div class="slider-wrapper">
          <div class="theme-btn-slider"></div>
          <span class="star star-1"></span>
          <span class="star star-2"></span>
          <span class="star star-3"></span>
          <span class="star star-4"></span>
          <span class="star star-5"></span>
          <span class="star star-6"></span>
        </div>
      </label>
    </div>
    <div class="text" id="dark-theme-text">Dark</div>
  </div>
</template>
