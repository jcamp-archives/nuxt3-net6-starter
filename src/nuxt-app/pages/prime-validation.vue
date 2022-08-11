<script setup lang="ts">
import type { IPerson } from '~/types'

let message = $ref('')
let errorMessage = $ref('')

const model = reactive({
  name: 'Isadora Jarr',
  age: 39,
  emailAddress: 'im@nonymous.com',
} as IPerson)

onMounted(() => setFocus('name'))

const submitHandler = async (_data: any, node: any) => {
  message = ''
  errorMessage = ''
  try {
    const response = await $postBody('/api/person', model)
    message = response.successMessage
  } catch (error: any) {
    errorMessage = handleFormError(error, node)
  }
}
</script>

<template>
  <div class="w-50% m-auto text-left">
    <h4>Prime Validation Sample</h4>
    <hr class="mb-5" />
    <TwAlertSuccess>{{ message }}</TwAlertSuccess>
    <TwAlertDanger>{{ errorMessage }}</TwAlertDanger>
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
