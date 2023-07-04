<script setup>
import Scroll from '@/components/Scroll/Scroll.vue'
defineProps(['title', 'intro'])
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ intro }}</p>
  <Scroll />
  <Scroll />
</template>
