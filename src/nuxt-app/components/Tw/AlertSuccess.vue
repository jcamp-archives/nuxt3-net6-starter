<script setup>
// this will work for fairly simple messages.
// if you use a component or anything more complex,
// it will always be visible so you'll need to add a component-level v-if
const slot = useSlots().default
const isVisible = computed(() => {
  return slot && slot()[0].children
})
</script>

<template>
  <div
    v-if="isVisible"
    class="my-6 w-full rounded border border-green-300 bg-green-200 p-3 text-green-700"
    role="alert"
  >
    <slot></slot>
  </div>
</template>
