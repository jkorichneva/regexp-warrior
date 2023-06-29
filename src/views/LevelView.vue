<script setup>
import PlayRoom from '../pages/PlayRoom.vue'
import chapterStructure from '@/assets/chapterStructure'
const props = defineProps(['chapterId', 'levelId'])
console.log(props.chapterId)
const chapterInfo = chapterStructure
  .find((chapter) => chapter.id === Number(props.chapterId))
  .levels.find((level) => level.id === Number(props.levelId))
</script>

<template>
  <div class="about">
    <PlayRoom
      :title="chapterInfo.title"
      :chapterId="props.chapterId"
      :levelId="props.levelId"
      :description-text="chapterInfo.description"
      :short="chapterInfo.short"
      :data="chapterInfo.data"
      :hints="chapterInfo.hints"
    />
  </div>
</template>
