<script setup lang="ts">
const collapseNavMenu = ref(false)

const ToggleNavMenu = (): void => {
  collapseNavMenu.value = !collapseNavMenu.value
}
</script>

<template>
  <div
    class="flex flex-col flex-shrink-0 text-white md:w-72 md:h-screen bg-gradient-to-b-70 from-blazor-blue to-blazor-indigo"
  >
    <div class="flex flex-row items-center justify-between px-4 text-white bg-black h-14 bg-opacity-40">
      <nuxt-link to="/" class="text-xl text-white">
        Nuxt3 Net6 Validation
      </nuxt-link>
      <button
        class="px-2 py-1 text-white text-opacity-50 bg-white border border-white rounded md:hidden bg-opacity-10 border-opacity-10"
        @click="ToggleNavMenu"
      >
        <svg class="fill-current h-7 w-7" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
    </div>
    <div :class="{ collapse: collapseNavMenu }" @click="ToggleNavMenu">
      <ul class="flex flex-col p-4 space-y-2">
        <!-- <li v-for="(item, i) in items" :key="i">
          <router-link :to="item.link" exact>
            <component :is="item.icon" class="w-6 mr-3" aria-hidden="true"></component> {{ item.title }}
          </router-link>
        </li> -->

        <li>
          <nuxt-link to="/">
            <span class="i-carbon-home w-6 mr-3" /> Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Fetch-Data">
            <span class="i-carbon-list w-6 mr-3" /> Fetch Data
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/Validation">
            <span class="i-carbon-data-error w-6 mr-3" /> Validation
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/prime-validation">
            <span class="text-blue-700 i-carbon-data-error w-6 mr-3" /> Prime Validation
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li a {
  @apply flex flex-row items-center h-12 px-4 py-2 text-sm text-gray-300 bg-white bg-opacity-0 rounded hover:bg-opacity-10;
}

li :deep(a.router-link-exact-active) {
  @apply text-white bg-opacity-25;
}
</style>
