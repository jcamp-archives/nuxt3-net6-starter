<template>
  <div class="flex h-screen w-full flex-col md:flex-row">
    <NavMenu />
    <div class="flex w-full flex-grow flex-col bg-white dark:bg-gray-800">
      <div
        class="hidden h-14 flex-shrink-0 flex-row items-center justify-between border-b border-gray-300 bg-gray-100 px-4 pr-8 text-blue-500 dark:border-gray-900 dark:bg-gray-900 md:flex"
      >
        <a
          href="https://github.com/JohnCampionJr/nuxt3-net6-starter"
          target="_blank"
          class="ml-md-auto"
          >About</a
        >
        <DarkToggle />
      </div>
      <div class="flex-grow py-5 pl-8 pr-6">
        <slot />
      </div>
    </div>
  </div>
</template>
