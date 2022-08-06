<template>
  <div class="flex flex-col w-full h-screen md:flex-row">
    <NavMenu />
    <div class="flex flex-col flex-grow w-full bg-white dark:bg-gray-800">
      <div
        class="flex-row items-center justify-between flex-shrink-0 hidden px-4 pr-8 text-blue-500 bg-gray-100 border-b border-gray-300 dark:bg-gray-900 dark:border-gray-900 md:flex h-14"
      >
        <a href="https://github.com/JohnCampionJr/nuxt3-net6-starter" target="_blank" class="ml-md-auto">About</a>
        <DarkToggle />
      </div>
      <div class="flex-grow py-5 pl-8 pr-6">
        <slot />
      </div>
    </div>
  </div>
</template>
