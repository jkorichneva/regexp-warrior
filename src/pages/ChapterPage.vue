<script setup>
import Parchment from '@/components/Parchment/Parchment.vue'
import NextStepButton from '@/components/NextStepButton/NextStepButton.vue'
const props = defineProps(['title', 'intro', 'chapterId'])
localStorage.setItem('regexpGameProgress', JSON.stringify({ chapter: props.chapterId, level: 0 }))
</script>

<template>
  <h1>{{ title }}</h1>
  <p>{{ intro }}</p>
  <Parchment />
  <Parchment />
  <NextStepButton />
</template>
