import { mount } from '@vue/test-utils'
import TextareaResize from '../textarea-resize.vue'

describe('textarea-resize.vue', () => {
  it('bind value', () => {
    const testValue = 'testValueProps'
    const wrapper = mount(TextareaResize, {
      propsData: {
        value: testValue
      }
    })
    expect(wrapper.vm.value).toBe(testValue)
  })
  it('set text', () => {
    const testValue = 'abc'
    const text = 'bar'
    const wrapper = mount(TextareaResize, {
      propsData: {
        value: testValue
      }
    })

    wrapper.setValue(text)

    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0]).toEqual([text])
  })
})
