import type { FormKitNode } from '@formkit/core'

export function handleFormError(error: any, node?: FormKitNode): string {
  node?.setErrors(error.data.errors, error.data.validationErrors)
  setFocus(error.data.validationErrors)
  return error.data?.errorMessage ?? ''
}
