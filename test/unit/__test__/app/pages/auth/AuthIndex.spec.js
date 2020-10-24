/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount } from '@vue/test-utils'
import AuthIndex from '@/app/pages/auth/views/AuthIndex'

describe('AuthIndex.vue', () => {
  const build = () => {
    const wrapper = mount(AuthIndex)

    return {
      wrapper
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
