import type { FormKitNode } from '@formkit/core'
import type { DefaultConfigOptions } from '@formkit/vue'
import * as _ from 'lodash-es'
// @ts-expect-error types not working correctly
import { primeInputs } from '@sfxcode/formkit-primevue'

function autoProps(node: FormKitNode) {
  if (node.props.id) {
    node.name = node.props.id
    if (node.props.label === undefined)
      node.props.label = _.startCase(node.props.id)
  }
}

const config: DefaultConfigOptions = {
  plugins: [autoProps],
  inputs: primeInputs,
  config: {
    rootClasses(sectionKey, node) {
      const type = node.props.type
      const classConfig = {
        outer: 'mb-5',
        legend: 'block mb-1 font-bold',
        label() {
          if (
            type === 'text' ||
            type === 'number' ||
            type === 'email' ||
            type === 'password'
          )
            return 'block mb-1 font-bold'

          if (type === 'radio') return 'text-sm text-gray-600 mt-0.5'
        },
        options() {
          if (type === 'radio') return 'flex flex-col flex-grow mt-2'
        },
        input() {
          if (
            type === 'text' ||
            type === 'number' ||
            type === 'email' ||
            type === 'password'
          )
            return 'w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-400 border rounded-lg focus:shadow-outline'

          if (type === 'radio') return 'mr-2'
        },
        wrapper() {
          if (type === 'radio') return 'flex flex-row flex-grow'
        },
        message: 'text-red-500 text-xs',
        help: 'text-xs text-gray-500',
      } as any

      function createClassObject(classesArray: string) {
        const classList = {} as Record<string, boolean>
        if (!classesArray) return classList
        classesArray.split(' ').forEach((className) => {
          classList[className] = true
        })
        return classList
      }

      const target = classConfig[sectionKey]
      if (typeof target === 'function') return createClassObject(target())

      return createClassObject(target)
    },
  },
}

export default config
