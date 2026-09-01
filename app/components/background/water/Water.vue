<script setup lang="ts">
import { generateWaves } from "@@/lib/background/water/generators"
import Wave from "./Wave.vue";

const waves = generateWaves();
</script>

<template>
  <div class="relative h-[30vh] overflow-x-hidden">
    <Wave v-for="wave in waves" :key="wave.key" :wave="wave" />
  </div>
</template>