/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import DashboardIndex from '@/app/pages/dashboard/views/DashboardIndex'
import CardBox from '@/components/layouts/CardBox'
import UserTable from '@/app/pages/dashboard/components/UserTable'

describe('AuthIndex.vue', () => {
  const build = () => {
    const wrapper = shallowMount(DashboardIndex)

    return {
      wrapper,
      UserTable: () => wrapper.findComponent(UserTable),
      CardBox: () => wrapper.findComponent(CardBox)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { UserTable, CardBox } =  build()

    expect(CardBox().exists()).toBe(true)
    expect(UserTable().exists()).toBe(true)
  })
})
