<script setup lang="ts">
import { generateStars } from '@@/lib/background/stars/generators'
import Star from './Star.vue';

const props = defineProps<{
  starCount: number
}>()

const stars = generateStars(props.starCount)

</script>

<template>
  <div class="relative h-[70vh]">
    <Star v-for="star in stars" :key="star.key" :star="star" />
  </div>
</template>