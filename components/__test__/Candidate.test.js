import { shallowMount } from '@vue/test-utils'
import jestConfig from '../../jest.config'
import Candidate from '~/components/Candidate.vue'

let wrapper

describe('Candidate', () => {
  beforeEach(() => {
    const props = {
      name: 'Kamala Harris',
      affiliation: 'D',
      house: true,
      senate: false,
      contactURL: 'www.google.com',
      votingRecord: 'lol.com'

    }
    wrapper = shallowMount(Candidate, {
      propsData: props
    })

    console.log(Candidate.computed)
  })

  // it('should be a Vue instance', () => {
  //   expect(wrapper.isVueInstance).toBeTruthy()
  // })

  // it('computed profilePic on load', () => {
  //   const profilePic = wrapper.find('img[alt="name"]')
  //   console.log(profilePic)
  // })
})
