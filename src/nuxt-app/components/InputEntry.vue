<script setup lang="ts">
const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value) router.push(`/hi/${encodeURIComponent(name.value)}`)
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
      class="border-rounded outline-active:none mt-5 w-[250px] border border-gray-200 bg-transparent px-4 py-2 text-center outline-none dark:border-gray-700"
      @keydown.enter="go"
    />
    <div>
      <button
        class="btn m-3 text-sm"
        :disabled="!name"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
