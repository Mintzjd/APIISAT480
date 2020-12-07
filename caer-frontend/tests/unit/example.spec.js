import { vshallowMount } from './test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('smoke test', () => {
    expect(true).toBe(true)
  })

  it('renders props.greeting when passed', () => {
    const mount = vshallowMount(HelloWorld)
    const greeting = 'new message'
    const wrapper = mount({
      propsData: { greeting },
    })
    expect(wrapper.text()).toContain(greeting)
  })
})
