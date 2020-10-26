/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import UserTable from '@/app/pages/dashboard/components/UserTable'
import CardBox from '@/components/layouts/CardBox'
import AppTable from '@/components/table/AppTable'
import AppInput from '@/components/form/AppInput'
import flushPromises from "flush-promises"


describe('UserTable.vue', () => {
  const build = () => {
    const wrapper = shallowMount(UserTable)

    return {
      wrapper,
      CardBox: () => wrapper.findComponent(CardBox),
      AppTable: () => wrapper.findComponent(AppTable),
      AppInput: () => wrapper.findComponent(AppInput)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { CardBox, AppTable, AppInput } =  build()

    expect(CardBox().exists()).toBe(true)
    expect(AppTable().exists()).toBe(true)
    expect(AppInput().exists()).toBe(true)
  })

  it('passes a binded user props to AppInput component', () => {
    const { AppInput, wrapper } =  build()
    wrapper.setData({
      forId: 'id-1'
    })

    const forId = AppInput().vm.$options.props.forId
    expect(forId).toBeTruthy()
  })

  it('should contain method fetchUsers()', () => {
    const { wrapper } = build()
    expect(wrapper.vm.fetchUsers).toBeTruthy()
  })

  it("should contain datatable.rows fetchUsers", async () => {
    const { wrapper } = build()

    await flushPromises()
    expect(wrapper.vm.datatable.rows.length).toBe(0)
  })

})
