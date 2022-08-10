<script setup lang="ts">
import type { FormKitNode } from '@formkit/core'
import type { Person } from '~/models/Person'

let message = $ref('')
const model = reactive({
  name: 'Isadora Jarr',
  age: 39,
  emailAddress: 'im@nonymous.com',
} as Person)

onMounted(() => setFocus('name'))

const submitHandler = async (_data: any, node?: FormKitNode) => {
  message = ''
  try {
    const response = await $fetch<any>('/api/person', {
      method: 'POST',
      body: model,
    })
    message = response.successMessage
  } catch (error: any) {
    handleFormError(error, node)
  }
}
</script>

<template>
  <div class="w-50% m-auto text-left">
    <h4>Prime Validation Sample</h4>
    <hr class="mb-5" />
    <div
      v-if="message"
      class="alert alert-success"
      role="alert"
    >
      {{ message }}
    </div>
    <FormKit
      v-model="model"
      type="form"
      :submit-attrs="{ inputClass: 'p-button p-component' }"
      @submit="submitHandler"
    >
      <FormKit
        id="name"
        type="primeInputText"
        validation="required|length:1,50"
      />
      <FormKit
        id="age"
        type="primeInputNumber"
        validation="required|min:0|max:150"
      />
      <FormKit
        id="emailAddress"
        type="primeInputText"
        validation="email|required"
      />
    </FormKit>
    <pre>{{ model }}</pre>
  </div>
</template>
