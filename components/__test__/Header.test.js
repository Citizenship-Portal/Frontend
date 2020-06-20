import { mount } from '@vue/test-utils'
import Header from '~/components/Header.vue'

describe('Header', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(Header)
  })

  it('should be a Vue instance', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })
  it('should render properly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
