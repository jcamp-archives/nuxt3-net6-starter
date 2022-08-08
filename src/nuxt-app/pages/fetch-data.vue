<script setup lang="ts">
import { format } from 'date-fns'
import type { Forecast } from '../models/Forecast'

const { pending, data: forecasts } = await useLazyFetch<Forecast[]>(
  '/weatherforecast',
  {
    initialCache: false,
    server: false,
  }
)

const getColor = (temperature: number | undefined): string => {
  if (temperature! < 0) return 'rounded bg-blue-500'
  else if (temperature! >= 0 && temperature! < 20) return 'rounded bg-green-600'
  else return 'rounded bg-red-600'
}

const date = (date: Date | undefined): string => {
  return format(new Date(date!), 'eeee, dd MMMM')
}
</script>

<template>
  <div>
    <h1 class="text-lg">Weather forecast</h1>
    <p class="my-3">
      This component demonstrates fetching data from the server.
    </p>

    <div v-if="pending">
      <p><em>Loading...</em></p>
    </div>
    <table
      v-else
      class="mx-auto w-1/2"
    >
      <thead>
        <tr class="border-t border-b-2 text-left">
          <th class="w-1/4 p-3">Date</th>
          <th class="w-1/4 p-3">Temp. (C)</th>
          <th class="w-1/4 p-3">Temp. (F)</th>
          <th class="w-1/4 p-3">Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in forecasts"
          :key="i"
          class="border-t text-left"
        >
          <td class="p-3">
            {{ date(item.date) }}
          </td>
          <td class="p-3">
            <span
              class="rounded-pill p-2 text-white"
              :class="[getColor(item.temperatureC)]"
            >
              {{ item.temperatureC }}
            </span>
          </td>
          <td class="p-3">
            {{ item.temperatureF }}
          </td>
          <td class="p-3">
            {{ item.summary }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
