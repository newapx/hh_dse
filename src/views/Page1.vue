<template>
  <div class="">
      <h1>Appointments</h1> 
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary m-1" @click="add"> Add</button>
      </div>
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