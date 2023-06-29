<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/play">Play</RouterLink>
      </nav>
      <ThemeSwitcher />
    </div>
  </header>

  <RouterView />
</template>
