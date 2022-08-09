<script setup lang="ts">
import type { Person } from '~/models/Person'

let message = $ref('')
const model = reactive({
  name: 'Isadora Jarr',
  age: 39,
  emailAddress: 'im@nonymous.com',
} as Person)

onMounted(() => {
  // document.getElementById('name')?.focus({}).blur()
  //  setFocus('name')
  const x = document.getElementsByName('name')[0]
  x?.focus()

  console.log(x)
  // setFocus('name')
})

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
      id="test3"
      v-model="model"
      type="form"
      :submit-attrs="{ inputClass: 'btn' }"
      @submit="submitHandler"
    >
      <FormKit
        name="name"
        type="text"
        label="Name"
        validation="required|length:1,50"
      />
      <FormKit
        id="age"
        name="age"
        label="Age"
        type="number"
        validation="required|min:0|max:150"
      />
      <FormKit
        id="emailAddress"
        name="emailAddress"
        label="Email"
        type="email"
        validation="email|required"
      />
    </FormKit>
    <pre>{{ model }}</pre>
  </div>
</template>
