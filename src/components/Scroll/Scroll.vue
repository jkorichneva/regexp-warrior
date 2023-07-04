<script setup>
import './Scroll.css'
</script>

<template>
  <div class="scroll">
    <div class="parchment"></div>
    <svg>
      <filter id="wavy2">
        <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="20" />
      </filter>
    </svg>
    <span class="scroll-text">Scroll text</span>
  </div>
</template>
