<script setup lang="ts">
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="my-3 inline-flex">
    <button
      class="btn rounded-full p-2"
      @click="dec()"
    >
      <div class="i-carbon-subtract" />
    </button>
    <div class="w-15 m-auto inline-block font-mono">
      {{ count }}
    </div>
    <button
      class="btn rounded-full p-2"
      @click="inc()"
    >
      <div class="i-carbon-add" />
    </button>
  </div>
</template>
