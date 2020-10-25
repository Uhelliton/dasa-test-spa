/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import DashboardIndex from '@/app/pages/dashboard/views/DashboardIndex'
import UserTable from '@/app/pages/dashboard/components/UserTable'

describe('DashboardIndex.vue', () => {
  const build = () => {
    const wrapper = shallowMount(DashboardIndex)

    return {
      wrapper,
      UserTable: () => wrapper.findComponent(UserTable)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { UserTable } =  build()

    expect(UserTable().exists()).toBe(true)
  })
})
