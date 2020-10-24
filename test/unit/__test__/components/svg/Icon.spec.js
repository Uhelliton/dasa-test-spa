/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount } from '@vue/test-utils'
import Icon from '@/components/svg/Icon'

describe('Icon.vue', () => {
  const build = () => {
    const wrapper = mount(Icon, {
      propsData: {
        name: 'text',
        title: 'text',
      }
    })

    return {
      wrapper,
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should contains svg in component', () => {
    const { wrapper } = build()
    const svg = wrapper.find('svg')
    expect(svg.exists()).toBe(true)
  })

  it('should render component has props name, title)', () => {
    const { wrapper } = build()
    expect(wrapper.props().name).toBe('text')
    expect(wrapper.props().title).toBe('text')
  })
})
