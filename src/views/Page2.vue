<template>
  <div>
    <h1>New appointment</h1>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" :class="{'active': step==1, 'disabled': step!=1}" href="#">Info</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{'active': step==2, 'disabled': step!=2}" href="#">Confirmation</a>
      </li>
    </ul>
    <tab1 v-if="step==1" :item="appointment" @next="step=2" @back="back"></tab1>
    <tab2 v-if="step==2" :item="appointment" @next="save" @back="step=1"></tab2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tab1 from "@/components/appointment/Tab1.vue"
import Tab2 from "@/components/appointment/Tab2.vue"
import { Appointment } from '@/types/appointment';
import router from '@/router';
import { AppointmentModule } from '@/store/appointments';

@Component({
  components: {
    Tab1, Tab2
  },
})
export default class Page2 extends Vue {
  appointment: Appointment = new Appointment("New Appointment")
  step = 1;

  async save(){
    await AppointmentModule.add(this.appointment);
    this.back();
  }

  back() {
    router.go(-1);
  }
}
</script>
