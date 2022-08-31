import { startCase } from 'lodash-es'
import type { FormKitNode } from '@formkit/core'
import type { DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
// @ts-expect-error types not working correctly
import { primeInputs } from '@sfxcode/formkit-primevue'

function autoProps(node: FormKitNode) {
  if (node.props.id) {
    node.name = node.props.id
    if (node.props.label === undefined)
      node.props.label = startCase(node.props.id)
  }
}

const inputBase = {
  label: 'block mb-1 font-bold',
  input:
    'h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline',
}

const config: DefaultConfigOptions = {
  plugins: [autoProps],
  inputs: primeInputs,
  config: {
    classes: generateClasses({
      global: {
        outer: 'mb-5',
        legend: 'block mb-1 font-bold',
        message: 'text-red-500 text-xs',
        help: 'text-xs text-gray-500',
        inner: 'w-full',
      },
      text: inputBase,
      number: inputBase,
      email: inputBase,
      password: inputBase,
      radio: {
        label: 'text-sm text-gray-600 mt-0.5',
        options: 'flex flex-col flex-grow mt-2',
        input: 'mr-2',
        wrapper: 'flex flex-row flex-grow',
      },
    }),
  },
}

export default config
