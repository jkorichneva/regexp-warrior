<script setup>
defineProps(['buttonText'])
import { useRouter } from 'vue-router'
import getNextStep from '@/helpers/getNextStep'
const router = useRouter()
function goToNext() {
  console.log('next')
  router.push(getNextStep())
}
</script>

<template>
  <button @click="goToNext">{{ buttonText || 'Next' }}</button>
</template>
