<script setup lang='ts'>
const { count, inc, dec } = useCount()
</script>

<template>
  <div class="inline-flex my-3">
    <button class="btn p-2 rounded-full" @click="dec()">
      <div class="i-carbon-subtract" />
    </button>
    <div class="font-mono w-15 m-auto inline-block">
      {{ count }}
    </div>
    <button class="btn p-2 rounded-full" @click="inc()">
      <div class="i-carbon-add" />
    </button>
  </div>
</template>
