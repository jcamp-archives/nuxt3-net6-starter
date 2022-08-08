<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="teal-700 dark:gray-200 px-4 py-10 text-center">
    <div class="text-4xl">
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button
        class="btn t-8 m-3 text-sm"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </main>
</template>
