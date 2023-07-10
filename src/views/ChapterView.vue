<script setup>
import chapterStructure from '@/assets/chapterStructure'
import ChapterPage from '../pages/ChapterPage.vue'
const props = defineProps(['chapterId'])
const chapterInfo = chapterStructure.find((chapter) => chapter.id === Number(props.chapterId))
</script>

<template>
  <div class="about">
    <ChapterPage
      :chapter-id="props.chapterId"
      :title="chapterInfo.title"
      :intro="chapterInfo.intro"
      :levels="chapterInfo.levels"
    />
  </div>
</template>
