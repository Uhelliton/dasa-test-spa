/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import App from '@/app/pages/auth/views/AuthIndex'
import LayoutExternal from '@/components/layouts/LayoutExternal'
import LayoutAuth from '@/components/layouts/LayoutAuth'
import SpriteSvg from '@/components/svg/SpriteSvg'


describe('App.vue', () => {
  const build = () => {
    const wrapper = shallowMount(App)

    return {
      wrapper,
      LayoutExternal: () => wrapper.findComponent(LayoutExternal),
      LayoutAuth: () => wrapper.findComponent(LayoutAuth),
      SpriteSvg: () => wrapper.findComponent(SpriteSvg)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })
})
