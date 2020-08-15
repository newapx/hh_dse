import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { getInputValues, withNameFilter } from "./../../util";
import { Appointment } from '@/types/appointment'
import Item from '@/components/appointment/ItemDetail.vue'
import dayjs from 'dayjs'


describe('ItemDetail.vue', () => {
  it('props.item - renders when passed', async () => {
    const localVue = createLocalVue()
    const item = new Appointment("Test appointment", dayjs('2020-08-15 10:15:25').toDate(), "Test notes")
    const wrapper = await mount(Item, {
      localVue,
      propsData: {
        item
      },
    })

    const values = getInputValues(wrapper);
    expect(values).toContain(item.name)
    expect(values).toContain('2020-08-15T10:15')
    expect(values).toContain(item.note)
  })

  it('props.item - when not passed renders no data', async () => {
    const localVue = createLocalVue()
    const wrapper = await mount(Item, {
      localVue,
    })
    expect(wrapper.text()).toContain("No data")
  })

  it('read-only disable input', async () => {
    const localVue = createLocalVue()
    const item = new Appointment("Test appointment")
    const wrapper = await mount(Item, {
      localVue,
      propsData: {
        item,
        readOnly: true
      },
    })

    expect(getInputValues(wrapper)).toContain(item.name)
    expect(wrapper.findAll('input').at(0).attributes("readonly")).toEqual("readonly");
  })
})
