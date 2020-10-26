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

  it('should render component has computed props: filtered  and return array', () => {
    const { wrapper } = build()
    expect(wrapper.vm.filtered).toEqual([])
  })

  it('should render component has computed props: paginatedData  and return array', () => {
    const { wrapper } = build()
    expect(wrapper.vm.paginatedData).toEqual([])
  })

  it('should render component has computed props: pageNumber', () => {
    const { wrapper } = build()
    expect(wrapper.vm.pageNumber).toBeTruthy()
  })

  it('should contain method goToPage()', () => {
    const { wrapper } = build()
    expect(wrapper.vm.goToPage).toBeTruthy()
  })

  // it('should contain method should contain method goToPage()()', () => {
  //   const { wrapper } = build()
  //   const methodStub = sinon.stub()
  //
  //   wrapper.setMethods({ goToPage: methodStub })
  //   wrapper.find('[data-pagination="pagination"]').trigger('click')
  //   expect(methodStub.called).toBe(true)
  // })
})
