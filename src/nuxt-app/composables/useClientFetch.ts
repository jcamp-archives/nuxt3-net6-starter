// source https://github.com/nuxt/framework/blob/main/packages/nuxt/src/app/composables/fetch.ts

import type { FetchResult, UseFetchOptions } from 'nuxt/dist/app/composables'
import type { NitroFetchRequest } from 'nitropack'
import type { Ref } from 'vue'
import type {
  AsyncData,
  KeyOfRes,
  PickFrom,
} from 'nuxt/dist/app/composables/asyncData'

export function useClientFetch<
  ResT = void,
  ErrorT = Error,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  opts?: Omit<
    UseFetchOptions<_ResT, Transform, PickKeys>,
    'server' | 'initialCache'
  >
): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null | true>
export function useClientFetch<
  ResT = void,
  ErrorT = Error,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  arg1?:
    | string
    | Omit<
        UseFetchOptions<_ResT, Transform, PickKeys>,
        'server' | 'initialCache'
      >,
  arg2?: string
) {
  const [opts, autoKey] = typeof arg1 === 'string' ? [{}, arg1] : [arg1, arg2]

  return useFetch<ResT, ErrorT, ReqT, _ResT, Transform, PickKeys>(
    request,
    {
      ...opts,
      initialCache: false,
      server: false,
    }
    // @ts-expect-error args miscount
    // check this with rc8
    // autoKey
  )
}

export function useClientLazyFetch<
  ResT = void,
  ErrorT = Error,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  opts?: Omit<
    UseFetchOptions<_ResT, Transform, PickKeys>,
    'server' | 'initialCache' | 'lazy'
  >
): AsyncData<PickFrom<ReturnType<Transform>, PickKeys>, ErrorT | null | true>
export function useClientLazyFetch<
  ResT = void,
  ErrorT = Error,
  ReqT extends NitroFetchRequest = NitroFetchRequest,
  _ResT = ResT extends void ? FetchResult<ReqT> : ResT,
  Transform extends (res: _ResT) => any = (res: _ResT) => _ResT,
  PickKeys extends KeyOfRes<Transform> = KeyOfRes<Transform>
>(
  request: Ref<ReqT> | ReqT | (() => ReqT),
  arg1?:
    | string
    | Omit<
        UseFetchOptions<_ResT, Transform, PickKeys>,
        'server' | 'initialCache' | 'lazy'
      >,
  arg2?: string
) {
  const [opts, autoKey] = typeof arg1 === 'string' ? [{}, arg1] : [arg1, arg2]

  return useFetch<ResT, ErrorT, ReqT, _ResT, Transform, PickKeys>(
    request,
    {
      ...opts,
      initialCache: false,
      server: false,
      lazy: true,
    }
    // @ts-expect-error args miscount
    // check this with rc8
    // autoKey
  )
}
