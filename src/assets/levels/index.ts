export type Level = {
  id: number
  title: string
  description: string
  short: string
  data: Data[]
  hints: string[]
}

type Data = {
  id: number
  value: string
  preview: string
  shouldBeEliminated: boolean
}
