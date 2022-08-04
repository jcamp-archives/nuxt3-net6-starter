<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="off"
      class="px-4 py-2 mt-5 w-[250px] text-center bg-transparent border border-rounded border-gray-200 dark:border-gray-700 outline-none outline-active:none"
      @keydown.enter="go"
    >
    <div>
      <button class="m-3 text-sm btn" :disabled="!name" @click="go">
        GO
      </button>
    </div>
  </div>
</template>
