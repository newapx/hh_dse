import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { withNameFilter } from "./../../util";
import { Appointment } from '@/types/appointment'
import Tab1 from '@/components/appointment/Tab1.vue'

describe('Tab1.vue', () => {
  it('props.item - renders when passed', async () => {
    const localVue = createLocalVue()
    const item = new Appointment("Test appointment")
    const wrapper = await mount(Tab1, {
      localVue,
      propsData: {
        item
      },
    })

    expect(wrapper.text()).toContain("Back")
    expect(wrapper.text()).toContain("Next")

    expect(withNameFilter(wrapper.findAll('button')).hasText("Next").at(0).attributes("disabled")).toBeFalsy();
  })

  it('props.item - when not passed renders no data', async () => {
    const localVue = createLocalVue()
    const wrapper = await mount(Tab1, {
      localVue,
    })

    expect(wrapper.text()).toContain("No data")
    expect(wrapper.text()).toContain("Back")
    expect(withNameFilter(wrapper.findAll('button')).hasText("Next").at(0).attributes("disabled")).toEqual("disabled");
  })
})
