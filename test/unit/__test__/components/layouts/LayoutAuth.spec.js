/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import LayoutAuth from '@/components/layouts/LayoutAuth'
import AppSidebar from '@/components/layouts/Sidebar'

describe('LayoutAuth.vue', () => {
  const build = () => {
    const wrapper = shallowMount(LayoutAuth, {
      stubs: ['router-link', 'router-view']
    })

    return {
      wrapper,
      AppSidebar: () => wrapper.findComponent(AppSidebar)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { AppSidebar } =  build()

    expect(AppSidebar().exists()).toBe(true)
  })

  it("does not render a children component", () => {
    const { AppSidebar } =  build()

    expect(!AppSidebar().exists()).toBe(false)
  })
})
