/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import LayoutExternal from '@/components/layouts/LayoutExternal'

describe('LayoutExternal.vue', () => {
  const build = () => {
    const wrapper = shallowMount(LayoutExternal, {
      stubs: ['router-link', 'router-view']
    })

    return {
      wrapper,
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
