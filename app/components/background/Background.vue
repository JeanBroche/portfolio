<script setup lang="ts">
import StarSky from './stars/StarSky.vue';


</script>

<template>
  <div class="relative h-screen bg-night-sky-primary">
    <StarSky :star-count="500" />
  </div>
</template>