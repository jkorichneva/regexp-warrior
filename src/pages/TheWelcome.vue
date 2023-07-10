<script setup lang="ts">
import { ref } from 'vue'
import NextStepButton from '@/components/NextStepButton/NextStepButton.vue'
const showLSWarning = ref(false)
const buttonText = ref('Start')
let lsData = null
try {
  const lsRawData = localStorage.getItem('regexpGameProgress')
  if (lsRawData) {
    try {
      lsData = JSON.parse(lsRawData)
      console.log(lsData)
      if (lsData?.chapter) {
        buttonText.value = 'Continue'
      }
    } catch {}
  }
} catch (e) {
  showLSWarning.value = true
}
</script>

<template>
  <h1>Welcome to Regexp Wizard</h1>
  <p>
    Regexp Wizard is a game that helps you to enhance your understanding of regular expressions and
    remember them.
  </p>
  <p>Embark on an adventure and uncover the secrets of regexp usage on your way</p>
  <NextStepButton :buttonText="buttonText" />

  <div v-if="showLSWarning">Please allow access to your local storage to save progress</div>
</template>
