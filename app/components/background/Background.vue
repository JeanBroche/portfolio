<script setup lang="ts">
import StarSky from './stars/StarSky.vue';
import Wave from './water/Wave.vue';


</script>

<template>
  <div class="relative h-screen bg-night-sky-primary">
    <StarSky :star-count="500" />
    <Wave />
  </div>
</template>