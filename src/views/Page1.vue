<template>
  <div class="">
    <h1>Appointments</h1> <button @click="add"> Add</button>
    <list :items="items" @remove="remove"></list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import List from "@/components/List.vue"
import { AppointmentModule } from '@/store/appointments';
import router from '@/router';

@Component({
  components: {
    List
  },
})
export default class Page1 extends Vue {
  get items () {
    return AppointmentModule.items;
  }

  created() {
    AppointmentModule.load();
  }

  add(){
    router.push({ path: 'Page2' });
  }

  remove(index: number) {
    AppointmentModule.remove(index);
  }
}
</script>