<script setup lang="ts">
import StarSky from './stars/StarSky.vue';
import Wave from './water/Wave.vue';
</script>

<template>
  <div class="relative h-screen bg-night-sky-primary">
    <StarSky :star-count="500" />
    <Wave :wave="{dimensions: {x: 123, y: 1}, key: 1, movementSpeed: 1, opacity: 1, position: {x: 1, y: 2}}" />
  </div>
</template>