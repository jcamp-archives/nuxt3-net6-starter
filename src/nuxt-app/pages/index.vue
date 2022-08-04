<template>
  <div>
    <Logos class="mb-6" />
    <Suspense>
      <PageView />
      <template #fallback>
        <div class="opacity-50 italic">
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
