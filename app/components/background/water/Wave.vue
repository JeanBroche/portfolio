<script setup lang="ts">
import { type Wave } from '@@/lib/background/water/types'

const props = defineProps<{
  wave: Wave
}>()
</script>

<template>
  <div 
    class="bg-water-accent" 
    :style="{
      height: `${props.wave.dimensions.y}px`,
      width: `${props.wave.dimensions.x}px`
    }"
  ></div>
</template>