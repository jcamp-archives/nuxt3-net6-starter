<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  titleClass: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="rounded border border-gray-300 px-4 py-5">
    <h3
      v-if="props.title"
      class="mb-4 text-lg font-medium leading-6 text-gray-900"
      :class="props.titleClass"
    >
      {{ props.title }}
    </h3>
    <slot></slot>
  </div>
</template>
