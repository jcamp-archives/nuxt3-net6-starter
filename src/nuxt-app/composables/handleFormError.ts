import type { FormKitNode } from '@formkit/core'

export function handleFormError(error: any, node?: FormKitNode) {
  node?.setErrors(error.data.errors, error.data.validationErrors)
  setFocus(error.data.validationErrors)
}
