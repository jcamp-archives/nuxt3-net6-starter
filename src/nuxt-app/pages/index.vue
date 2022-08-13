<template>
  <div>
    <Logos class="mb-6" />
    <InputEntry />
    <div class="justify-left m-5 flex gap-3 text-xl text-gray-400">
      <NuxtLink
        class="i-[carbon-campsite]"
        to="/"
      />
      <NuxtLink
        class="i-[carbon-temperature]"
        to="/fetch-data"
      />
      <NuxtLink
        class="i-[carbon-data-error]"
        to="/validation"
      />
      <a
        class="i-[carbon-logo-github]"
        href="https://github.com/JohnCampionJr/nuxt3-net6-starter"
        target="_blank"
      />
      <DarkToggle />
    </div>
  </div>
</template>
