/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Sidebar from '@/components/layouts/Sidebar'
import AppMenu from '@/components/layouts/Menu'

describe('Sidebar.vue', () => {
  const build = () => {
    const wrapper = shallowMount(Sidebar)

    return {
      wrapper,
      AppMenu: () => wrapper.findComponent(AppMenu)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { AppMenu } =  build()

    expect(AppMenu().exists()).toBe(true)
  })

  it("does not render a children component", () => {
    const { AppMenu } =  build()

    expect(!AppMenu().exists()).toBe(false)
  })
})
