<script setup lang="ts">
import StarSky from './stars/StarSky.vue';
import Water from './water/Water.vue';
</script>

<template>
  <div class="relative h-screen bg-night-sky-primary">
    <StarSky :star-count="500" />
    <Water />
  </div>
</template>