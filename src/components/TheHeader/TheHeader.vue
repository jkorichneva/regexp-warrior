<script setup lang="ts">
import { RouterLink } from 'vue-router'
import TheThemeSwitcher from '@/components/TheThemeSwitcher/TheThemeSwitcher.vue'
</script>

<template>
  <header>
    <div :class="$style.wrapper">
      <nav :class="$style.nav">
        <RouterLink to="/" :class="$style.link">Home</RouterLink>
        <RouterLink to="/overview" :class="$style.link">Level Overview</RouterLink>
      </nav>
      <TheThemeSwitcher />
    </div>
  </header>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav {
  display: flex;
}

.link {
  display: inline-flex;
  margin-right: 10px;
}
</style>
