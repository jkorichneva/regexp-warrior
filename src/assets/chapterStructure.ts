import levelOne from '@/assets/levels/levelOne'
import levelTwo from '@/assets/levels/levelTwo'
import type { Level } from '@/assets/levels'

export type ChapterStructure = Chapter[]
export type Chapter = {
  id: number
  title: string
  intro: string
  levels: Level[]
}
export default [
  {
    id: 0,
    title: 'Introduction',
    intro:
      'You play as a wizard, who wants to get a magical staff with great power.\n' +
      'To wield it, he needs to find artifacts, that will help him to summon it and prove yourself\n' +
      'worthy of it.'
  },
  {
    id: 1,
    title: 'Chapter 1. Unveiling the Allmight Flag',
    intro:
      'Prepare to embark on a perilous quest through the treacherous depths of the deep and ominous dungeons in search of the legendary Allmight flag. These dark and foreboding catacombs teem with an array of formidable foes, including relentless skeletons and other ghastly creatures that stand between you and your coveted prize.' +
      'Venture forth, brave adventurer, and embrace the darkness as you delve deeper into the treacherous depths. Will you emerge victorious, claiming the fabled flag of Allmight as your own, or will the shadows consume you, leaving your valiant quest forever lost in the annals of history? The fate of this legendary artifact rests solely in your hands.',
    levels: [levelOne, levelTwo]
  },
  {
    id: 2,
    title: 'Chapter 2. New hope',
    intro:
      'Prepare to embark on a perilous quest through the treacherous depths of the deep and ominous dungeons in search of the legendary Allmight flag. These dark and foreboding catacombs teem with an array of formidable foes, including relentless skeletons and other ghastly creatures that stand between you and your coveted prize.' +
      'Venture forth, brave adventurer, and embrace the darkness as you delve deeper into the treacherous depths. Will you emerge victorious, claiming the fabled flag of Allmight as your own, or will the shadows consume you, leaving your valiant quest forever lost in the annals of history? The fate of this legendary artifact rests solely in your hands.',
    levels: [levelOne, levelTwo]
  }
]
