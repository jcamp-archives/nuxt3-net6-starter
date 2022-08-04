<script setup lang="ts">
const { data } = await useFetch<any>('/api/pageview')

const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div class="text-gray-400">
    <span class="font-medium text-gray">{{ data.pageview }}</span>
    page views since
    <span class="text-gray">{{ time }}</span>
  </div>
</template>
