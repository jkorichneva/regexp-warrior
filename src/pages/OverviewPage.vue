<script setup lang="ts">
import chapterStructure from '@/assets/chapterStructure'
</script>

<template>
  <ul :class="$style.overview">
    <li v-for="chapter in chapterStructure" :class="$style.chapter">
      {{ chapter.title }}
      <ul :class="$style.levelList">
        <a :href="`/play/chapter/${chapter.id}/level/${level.id}`" v-for="level in chapter.levels">
          <li :class="$style.level">
            {{ level.title }}
          </li>
        </a>
      </ul>
    </li>
  </ul>
</template>

<style module>
.overview {
  list-style: none;
  padding: 0;
}
.chapter {
  font-size: 18px;
}
.level {
}
</style>
