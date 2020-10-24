/* eslint-disable */
/**
 * @jest-environment node
 */
import { mount } from '@vue/test-utils'
import App from '../../../src/app/pages/auth/views/AuthIndex'

describe('App.vue', () => {
  const build = () => {
    const wrapper = mount(App)

    return {
      wrapper
    }
  }

  it('should render instance component', () => {
    const { wrapper } = build()
    // expect(vm.$el.querySelector('.hello h1').textContent).toEqual('Welcome to Your Vue.js App')
    expect(wrapper.vm).toBeTruthy()
  })
})
