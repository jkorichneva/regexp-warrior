import getNextLevel from '@/helpers/getNextLevel'

export default function getNextStep() {
  let completed = null
  try {
    completed = JSON.parse(localStorage.getItem('regexpGameProgress') || '')
  } catch {}
  if (!completed) {
    return `/play/chapter/0`
  }
  console.log(completed)
  const next = getNextLevel(completed.chapter, completed.level)
  console.log(next)

  if (next.level !== 0) {
    return `/play/chapter/${next.chapter}/level/${next.level}`
  } else {
    return `/play/chapter/${next.chapter}`
  }
}
