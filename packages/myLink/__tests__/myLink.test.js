/**
* @jest-environment jsdom
*/
import Element from '../src/myLink.vue'
import { mount } from '@vue/test-utils'

describe('lg-MyLink', () => {
  test('a-test', () => {
    const wrapper = mount(Element)
    expect(wrapper.html()).toContain('a href="" class="not-underline"')
  })

  test('a-href-test', () => {
    const wrapper = mount(Element, {
      propsData: {
        href: 'https://www.baidu.com'
      }
    })
    expect(wrapper.props('href')).toBe('https://www.baidu.com')
  })
})

