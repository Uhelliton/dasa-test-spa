/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount } from '@vue/test-utils'
import AppButton from '@/components/form/AppButton'

describe('AppButton.vue', () => {
  const build = () => {
    const wrapper = mount(AppButton,  {
      propsData: {
        label: 'value',
        fullWidth: false,
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
    expect(wrapper.props().label).toBe('value')
  })

  it('should render component has props fullWidth', () => {
    const { wrapper } = build()
    expect(wrapper.props().fullWidth).toBe(false)
  })
})
