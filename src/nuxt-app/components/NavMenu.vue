<script setup lang="ts">
const collapseNavMenu = ref(false)

const ToggleNavMenu = (): void => {
  collapseNavMenu.value = !collapseNavMenu.value
}
</script>

<template>
  <div
    class="flex flex-shrink-0 flex-col bg-gradient-to-b-70 from-blazor-blue to-blazor-indigo text-white md:h-screen md:w-72"
  >
    <div
      class="flex h-14 flex-row items-center justify-between bg-black bg-opacity-40 px-4 text-white"
    >
      <nuxt-link
        to="/"
        class="text-xl text-white"
      >
        Nuxt3 Net6 Validation
      </nuxt-link>
      <button
        class="rounded border border-white border-opacity-10 bg-white bg-opacity-10 px-2 py-1 text-white text-opacity-50 md:hidden"
        @click="ToggleNavMenu"
      >
        <svg
          class="h-7 w-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <div
      :class="{ collapse: collapseNavMenu }"
      @click="ToggleNavMenu"
    >
      <ul class="flex flex-col space-y-2 p-4">
        <!-- <li v-for="(item, i) in items" :key="i">
          <router-link :to="item.link" exact>
            <component :is="item.icon" class="w-6 mr-3" aria-hidden="true"></component> {{ item.title }}
          </router-link>
        </li> -->

        <li>
          <nuxt-link to="/">
            <span class="i-carbon-home mr-3 w-6" /> Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Fetch-Data">
            <span class="i-carbon-list mr-3 w-6" /> Fetch Data
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Validation">
            <span class="i-carbon-data-error mr-3 w-6" /> Validation
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/prime-validation">
            <span class="i-carbon-data-error mr-3 w-6 text-blue-700" /> Prime
            Validation
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li a {
  @apply flex h-12 flex-row items-center rounded bg-white bg-opacity-0 px-4 py-2 text-sm text-gray-300 hover:bg-opacity-10;
}

li :deep(a.router-link-exact-active) {
  @apply bg-opacity-25 text-white;
}
</style>
