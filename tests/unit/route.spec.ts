import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import Page2 from "@/views/Page2.vue"
import Tab1 from "@/components/appointment/Tab1.vue"
import router from "@/router/index"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("route show page2", async () => {
    const wrapper = mount(App, { localVue, router })

    await router.push("/page2")
    expect(wrapper.findComponent(Page2).exists()).toBe(true)
    expect(wrapper.findComponent(Tab1).exists()).toBe(true)
  })
})