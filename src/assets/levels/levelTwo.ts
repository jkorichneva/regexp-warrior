export default {
  id: 2,
  title: 'Level 2',
  description:
    'Welcome to the mysterious room filled with skeletal remnants! As you step into the dimly lit chamber, your eyes are immediately drawn to the eerie sight of several skeletal figures positioned throughout the space. ' +
    'Each skeletal being bears a distinct number inscribed upon its bony cranium. To emerge victorious from this macabre encounter, you must channel your wit and prowess in the art of pattern matching. ' +
    'Your task is to craft a masterful regular expression capable of deftly selecting and capturing all the numbers adorning the skulls of these skeletal adversaries.',
  short: 'Write a regexp to highlight all numbers so you can pass',
  data: [
    { id: 1, value: 1, preview: '💀', shouldBeEliminated: true },
    { id: 2, value: 5, preview: '💀', shouldBeEliminated: true },
    { id: 3, value: 10, preview: '💀', shouldBeEliminated: true },
    { id: 4, value: 's', preview: '🌿', shouldBeEliminated: false },
    { id: 5, value: 'a', preview: '🌲', shouldBeEliminated: false },
    { id: 6, value: 'ghost', preview: '👻', shouldBeEliminated: false }
  ],
  hints: ['Try typing a regexp that would select only numbers', '\\d']
}
