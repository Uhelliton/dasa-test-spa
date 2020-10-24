/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount } from '@vue/test-utils'
import AppInput from '@/components/form/AppInput'

describe('AppInput.vue', () => {
  const build = () => {
    const wrapper = mount(AppInput,  {
      propsData: {
        label: 'text',
        value: 'text',
        forId: 'text',
        outlined: false,
      }
    })

    return {
      wrapper
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should render component has props label', () => {
    const { wrapper } = build()
    expect(wrapper.props().label).toBe('text')
  })

  it('should render component has props value', () => {
    const { wrapper } = build()
    expect(wrapper.props().value).toBe('text')
  })

  it('should render component has props forId', () => {
    const { wrapper } = build()
    expect(wrapper.props().forId).toBe('text')
  })

  it('should render component has props outlined', () => {
    const { wrapper } = build()
    expect(wrapper.props().outlined).toBe(false)
  })
})
