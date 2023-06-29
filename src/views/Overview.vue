<script setup lang="ts">
import chapterStructure from '@/assets/chapterStructure'
</script>

<template>
  <ul>
    <li v-for="chapter in chapterStructure">
      {{ chapter.title }}
      <ul>
        <a :href="`/play/chapter/${chapter.id}/level/${level.id}`" v-for="level in chapter.levels">
          <li>
            {{ level.title }}
          </li>
        </a>
      </ul>
    </li>
  </ul>
</template>
