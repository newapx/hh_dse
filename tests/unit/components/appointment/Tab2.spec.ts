import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { Appointment } from '@/types/appointment'
import Tab2 from '@/components/appointment/Tab2.vue'
import dayjs from 'dayjs'

describe('Tab2.vue', () => {
  it('props.item - renders when passed', async () => {
    const localVue = createLocalVue()
    const item = new Appointment("Test appointment", dayjs('2020-08-15 10:15:25').toDate(), "Test notes")
    const wrapper = await mount(Tab2, {
      localVue,
      propsData: {
        item
      },
    })

    expect(wrapper.text()).toContain("Back")
    expect(wrapper.text()).toContain("Create")
  })

  it('props.item - when not passed renders no data', async () => {
    const localVue = createLocalVue()
    const wrapper = await mount(Tab2, {
      localVue,
    })

    expect(wrapper.text()).toContain("No data")
    expect(wrapper.text()).toContain("Back")
    expect(wrapper.text()).not.toContain("Create")
  })
})
