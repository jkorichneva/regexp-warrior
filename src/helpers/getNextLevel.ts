import chapterStructure, { ChapterStructure } from '@/assets/chapterStructure'

export default function getNextLevel(chapterCompleted: string, levelCompleted: string) {
  const nextLevelExists = chapterStructure
    .find((chapter) => chapter.id === Number(chapterCompleted))
    .levels.find((level) => level.id === Number(levelCompleted + 1))
  if (nextLevelExists) {
    return { chapter: chapterCompleted, level: levelCompleted + 1 }
  } else {
    return { chapter: chapterCompleted + 1, level: 1 }
  }
}
