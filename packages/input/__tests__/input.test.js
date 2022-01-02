/**
 * @jest-environment jsdom
 */
import LgInput from '../src/input.vue'
import { mount } from '@vue/test-utils'

describe('lg-input', () => {
  test('input-test', () => {
    const wrapper = mount(LgInput)
    expect(wrapper.html()).toContain('input type="text"')
  })

  test('input-password', () => {
    const wrapper = mount(LgInput, {
      propsData: {
        type: 'password'
      }
    })
    expect(wrapper.html()).toContain('input type="password"')
  })

  test('input-value', () => {
    const wrapper = mount(LgInput, {
      propsData: {
        value: 'admin'
      }
    })
    expect(wrapper.props('value')).toBe('admin')
  })

  test('input-snapshot', () => {
    const wrapper = mount(LgInput, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
