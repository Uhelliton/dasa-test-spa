/* eslint-disable */
/**
 * @jest-environment node
 */
import Vuex from 'vuex'
import { shallowMount, createLocalVue, config  } from '@vue/test-utils'
import Menu from '@/components/layouts/Menu'
import sinon from 'sinon'
import { __createMocks as createStoreMocks } from '../../app/domains/__mocks__/store-mock'

config.showDeprecationWarnings = false

// Tell Jest to use the mock
// implementation of the store.
jest.mock('../../app/domains/__mocks__/store-mock');
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Menu.vue', () => {
  let storeMocks

  beforeEach(() => {
    // Create a fresh store and wrapper
    // instance for every test case.
    storeMocks = createStoreMocks()
  })


  const build = () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      stubs: {}
    })

    return {
      wrapper,
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('clicking logout button triggers onLogout()', () => {
    const { wrapper } = build()

    // global function mock to stop actual from executing
    window.open = jest.fn();
    wrapper.vm.onLogout = jest.fn();

    const onLogout = '.icon-settings';
    wrapper.find(onLogout).trigger('click');
    expect(wrapper.vm.onLogout).toBeCalled();
  })

  it('should contain method onLogout', () => {
    const { wrapper } = build()
    const methodStub = sinon.stub()

    wrapper.setMethods({ onLogout: methodStub })
    wrapper.find('.icon-settings').trigger('click')
    expect(methodStub.called).toBe(true)
  })

  it('after logout dispatches successfully, should go / route?', () => {
    const { wrapper } = build()
  })
})
