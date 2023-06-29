<script setup>
import { computed } from '@vue/reactivity'
import './Scene.css'
const props = defineProps(['regex', 'data', 'eliminated'])
console.log(props.regex)
const regexp = computed(() => new RegExp(props.regex))
console.log(regexp)
</script>

<template>
  <div>
    Fight scene:
    <div
      v-for="character in props.data"
      :class="{
        affected: props.regex !== '' ? regexp.test(character.value) : false,
        eliminate: props.eliminated,
        icon: true
      }"
    >
      {{ character.preview }}
    </div>
  </div>
  <br />
</template>
