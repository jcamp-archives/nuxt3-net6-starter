<template>
  <div class="text-gray4 m-5 flex justify-center gap-3 text-xl">
    <NuxtLink
      class="i-carbon-campsite"
      to="/"
    />
    <NuxtLink
      class="i-carbon-temperature"
      to="/fetch-data"
    />
    <NuxtLink
      class="i-carbon-data-error"
      to="/validation"
    />
    <NuxtLink
      class="i-carbon-data-error text-blue-700"
      to="/prime-validation"
    />
    <a
      class="i-carbon-logo-github"
      href="https://github.com/antfu/vitesse-nuxt3"
      target="_blank"
    />
    <DarkToggle />
  </div>
</template>
