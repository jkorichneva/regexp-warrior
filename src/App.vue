<script setup lang="ts">
import TheHeader from '@/components/TheHeader/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <TheHeader />

  <RouterView :key="$route.fullPath" />
</template>
