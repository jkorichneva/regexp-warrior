<script setup>
import { ref } from 'vue'
import Input from '../components/Input/Input.vue'
import Scene from '../components/Scene/Scene.vue'
import getNextStep from '@/helpers/getNextStep'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  descriptionText: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true
  },
  hints: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  chapterId: {
    type: String,
    required: true
  },
  levelId: {
    type: String,
    required: true
  }
})

const input = ref('')
const eliminated = ref(false)

function onSubmit() {
  console.log(input.value)
  console.log('submit0')
  const regexp = new RegExp(input.value)
  const checked = props.data.filter((item) => {
    const checkResult = regexp.test(item.value)
    return checkResult !== item.shouldBeEliminated
  })
  console.log(checked)
  if (checked.length === 0) {
    eliminated.value = true
    try {
      localStorage.setItem(
        'regexpGameProgress',
        JSON.stringify({ chapter: props.chapterId, level: props.levelId })
      )
      router.push(getNextStep())
    } catch {}
  }
}
</script>
<template>
  <h1>{{ title }}</h1>
  <p>{{ descriptionText }}</p>
  <br />
  <details>
    <summary>Short Version</summary>
    {{ short }}
  </details>
  <br />
  <Scene :regex="input" :data="data" :eliminated="eliminated" />
  <Input v-model="input" @submit="onSubmit" />
  <div>Your spellcasting: /{{ input }}/</div>
  <button @click="onSubmit">Eliminate!</button>

  <details>
    <summary>I need help</summary>
    <details v-for="(hint, index) in hints">
      <summary>Hint {{ index }}</summary>
      {{ hint }}
    </details>
  </details>
</template>
