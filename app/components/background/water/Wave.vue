<script setup lang="ts">
import { type Wave } from '@@/lib/background/water/types'

const props = defineProps<{
  wave: Wave
}>()
</script>

<template>
  <div 
    class="bg-water-accent absolute" 
    :style="{
      height: `${props.wave.dimensions.y}px`,
      width: `${props.wave.dimensions.x}%`,
      top: `${props.wave.position.y}%`,
      left: `${props.wave.position.x}%`,
      opacity: props.wave.opacity,
    }"
  ></div>
</template>