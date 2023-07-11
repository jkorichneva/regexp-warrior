<script setup lang="ts">
import { ref } from 'vue'
import Wizard from '@/assets/Wizard.vue'
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
  <div :class="$style.welcomePage">
    <div :class="$style.leftColumn">
      <h1>Welcome to Regexp Wizard</h1>
      <p>
        Regexp Wizard is a game that helps you to enhance your understanding of regular expressions
        and remember them.
      </p>
      <p>Embark on an adventure and uncover the secrets of regexp usage on your way</p>
      <br />
      <NextStepButton :buttonText="buttonText" />
      <br />
      <br />
      <p>
        P.S. If you found a bug or see a room for improvement, please open an
        <a
          href="https://github.com/jkorichneva/regexp-warrior/issues/new"
          target="_blank"
          rel="noreferrer noopener"
          >issue</a
        >
      </p>

      <div v-if="showLSWarning">Please allow access to your local storage to save progress</div>
    </div>
    <div :class="$style.image">
      <Wizard />
    </div>
  </div>
</template>

<style module>
.welcomePage {
  display: flex;
}

.leftColumn {
  width: 60%;
}

.image {
  width: 40%;
}

.image svg {
  width: 60%;
  margin: 0 auto;
  display: block;
}

@media (max-width: 767px) {
  .leftColumn {
    width: 100%;
  }

  .image {
    width: 100%;
    padding-top: 2rem;
  }

  .welcomePage {
    flex-direction: column;
  }
}
</style>
