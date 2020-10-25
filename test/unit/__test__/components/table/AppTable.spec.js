/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount } from '@vue/test-utils'
import AppTable from '@/components/table/AppTable'
import sinon from 'sinon'

describe('AppTable.vue', () => {
  const build = () => {
    const wrapper = shallowMount(AppTable, {
      propsData: {
        thead: [],
        filterKey: '',
      }
    })

    return {
      wrapper,
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('should render component has props thead, rows, filterKey', () => {
    const { wrapper } = build()
    expect(wrapper.props().thead).toEqual([])
    expect(wrapper.props().rows).toEqual([])
    expect(wrapper.props().filterKey).toEqual('')
  })

  // it('should contain method goToPage()', () => {
  //   const { wrapper } = build()
  //   const methodStub = sinon.stub()
  //
  //   wrapper.setMethods({ goToPage: methodStub })
  //   wrapper.find('[data-pagination="pagination"]').trigger('click')
  //   expect(methodStub.called).toBe(true)
  // })
})
