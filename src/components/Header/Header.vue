<script setup lang="ts">
import './Header.css'
import { RouterLink } from 'vue-router'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/overview">Level Overview</RouterLink>
      </nav>
      <ThemeSwitcher />
    </div>
  </header>
</template>
