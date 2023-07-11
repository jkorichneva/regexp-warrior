<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue', 'submit'])
</script>

<template>
  <input
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
    type="text"
    @keydown.enter="$emit('submit')"
  />
</template>
