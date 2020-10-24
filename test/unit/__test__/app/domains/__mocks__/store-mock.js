import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const CHANGE_USER = 'CHANGE_USER'
const CHANGE_TOKEN = 'CHANGE_TOKEN'
const CLEAR_USER_SESSION = 'CLEAR_USER_SESSION'

export const state = {
  user: {
    name: 'Uhelliton Andrade',
    email: 'uhlliton@uol.com.br'
  },
  token: 'eyJhbGciOiJIUzI1NiJ9'
}

export const getters = {
  user: jest.fn().mockReturnValue({
    user: {
      name: 'Uhelliton Andrade',
      email: 'uhlliton@uol.com.br'
    },
    token: 'eyJhbGciOiJIUzI1NiJ9'
  }),
  token: jest.fn().mockReturnValue('eyJhbGciOiJIUzI1NiJ9')
}

export const mutations = {
  [CHANGE_USER]: jest.fn(),
  [CHANGE_TOKEN]: jest.fn(),
  [CLEAR_USER_SESSION]: jest.fn()
}

export const actions = {
  attemptLogin: jest.fn(),
  logout: jest.fn()
}

export function __createMocks (custom = { getters: {}, mutations: {}, actions: {}, state: {} }) {
  const mockGetters = Object.assign({}, getters, custom.getters)
  const mockMutations = Object.assign({}, mutations, custom.mutations)
  const mockActions = Object.assign({}, actions, custom.actions)
  const mockState = Object.assign({}, state, custom.state)

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState
    })
  }
}

export const store = __createMocks().store
