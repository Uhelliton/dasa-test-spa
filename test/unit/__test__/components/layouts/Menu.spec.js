/* eslint-disable */
/**
 * @jest-environment node
 */
import { shallowMount, createLocalVue, config  } from '@vue/test-utils'
import Vuex from 'vuex'
import Menu from '@/components/layouts/Menu'
import Icon from '@/components/svg/Icon'
import sinon from 'sinon'
config.showDeprecationWarnings = false

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Menu.vue', () => {
  let actions
  let getters
  let state
  let store

  beforeEach(() => {
    state = {
      user: {
        name: 'Uhelliton Andrade',
        email: 'uhlliton@uol.com.br'
      },
      token: 'eyJhbGciOiJIUzI1NiJ9'
    }
    actions = {
      attemptLogin: jest.fn(),
      logout: jest.fn()
    }
    getters = {
      user: () => {
        return {
          name: 'Uhelliton Andrade',
          email: 'uhlliton@uol.com.br'
        }
      },
      token: () => {
        return 'eyJhbGciOiJIUzI1NiJ9'
      }
    },
    store = new Vuex.Store({
      modules: {
        user: {
          actions,
          state,
          getters,
          namespaced: true
        }
      }
    })
  })

  const build = () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store,
      stubs: {}
    })

    return {
      wrapper,
      Icon: () => wrapper.findComponent(Icon)
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders main children components', () => {
    const { Icon } =  build()

    expect(Icon().exists()).toBe(true)
  })

  it('clicking logout button triggers onLogout()', () => {
    const { wrapper } = build()

    // global function mock to stop actual from executing
    window.open = jest.fn();
    wrapper.vm.onLogout = jest.fn();

    wrapper.find({ ref: 'logout'}).trigger('click')
    expect(wrapper.vm.onLogout).toBeCalled();
  })

  it('should contain method onLogout', () => {
    const { wrapper } = build()
    const methodStub = sinon.stub()

    wrapper.setMethods({ onLogout: methodStub })
    wrapper.find({ ref: 'logout'}).trigger('click')
    expect(methodStub.called).toBe(true)
  })

  it('after logout dispatches successfully, should go / route?', () => {
    const { wrapper } = build()
  })
})
