<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

function play() {
  if (lsData) {
    router.push(`/play/chapter/${lsData.chapter}/level/${lsData.level}`)
  } else {
    router.push(`/play/chapter/1`)
  }
}
</script>

<template>
  <h1>Welcome to [GameName]</h1>
  <p>
    [GameName] is a JS game that helps you to enhance your understanding of regular expressions and
    remember them.
  </p>
  <p>Embark on an adventure and uncover the secrets of regexp usage on your way</p>
  <button @click="play">{{ buttonText }}</button>

  <div v-if="showLSWarning">Please allow access to your local storage to save progress</div>
</template>
