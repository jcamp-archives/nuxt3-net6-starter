// this file is just some ideas to try to remove repetitive boilerplate code
// these are direct fetch calls, vs the useClientFetch which is nuxt3's asyncdata wrapper

import { $fetch } from 'ohmyfetch'
import type { FetchRequest } from 'ohmyfetch'

// example code for future use
export async function setHeaders(_headers?: HeadersInit | undefined) {
  // const authStore = useAuthStore()
  // if (!authStore.isAuthenticated()) return
  // // await authStore.refresh()
  // headers = new Headers(headers)
  // headers.set('Authorization', `Bearer ${authStore.authInfo?.accessToken}`)
}

export const $get = $fetch.create({
  method: 'GET',
  async onRequest({ options }) {
    setHeaders(options.headers)
  },
})

export const $post = $fetch.create({
  method: 'POST',
  async onRequest({ options }) {
    setHeaders(options.headers)
  },
})

export function $postBody<T = any>(request: FetchRequest, body?: any) {
  return $post<T>(request, { body })
}
