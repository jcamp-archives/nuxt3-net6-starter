<template>
  <div class="text-xl text-gray4 m-5 flex justify-center gap-3">
    <NuxtLink class="i-carbon-campsite" to="/" />
    <NuxtLink class="i-carbon-temperature" to="/fetch-data" />
    <NuxtLink class="i-carbon-data-error" to="/validation" />
    <NuxtLink class="text-blue-700 i-carbon-data-error" to="/prime-validation" />
    <a class="i-carbon-logo-github" href="https://github.com/antfu/vitesse-nuxt3" target="_blank" />
    <DarkToggle />
  </div>
</template>
