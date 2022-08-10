<script setup lang="ts">
import type { Person } from '~/models/Person'

let message = $ref('')
const model = reactive({
  name: 'Isadora Jarr',
  age: 39,
  emailAddress: 'im@nonymous.com',
} as Person)

onMounted(() => setFocus('name'))

const submitHandler = async (_data: any, node: any) => {
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
    <h4>Tailwind Validation Sample</h4>
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
      :submit-attrs="{ inputClass: 'btn' }"
      @submit="submitHandler"
    >
      <FormKit
        id="name"
        type="text"
        validation="required|length:1,50"
      />
      <FormKit
        id="age"
        type="number"
        validation="required|min:0|max:150"
      />
      <FormKit
        id="emailAddress"
        type="email"
        validation="email|required"
      />
    </FormKit>
    <pre>{{ model }}</pre>
  </div>
</template>
