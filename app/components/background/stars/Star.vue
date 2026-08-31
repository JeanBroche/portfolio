<script setup lang="ts">
import { type Star } from '@@/lib/background/stars/types'

const props = defineProps<{
  star: Star
}>()

</script>

<template>
  <div class="bg-white rounded-full absolute animate-pulse" :style="{
    width: `${props.star.size}px`,
    height: `${props.star.size}px`,
    left: `${props.star.position.x}%`,
    top: `${props.star.position.y}%`,
    opacity: props.star.brightness,
    animation: `pulse ${props.star.flickerSpeed}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  }">
   </div>
</template>