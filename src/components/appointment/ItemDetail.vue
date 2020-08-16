<template>
<div>
  <form v-if="item" class="">
    <div class="form-group">
      <label>Full name</label>
      <input type="text" class="form-control" v-model="item.name" :readonly="readOnly" required>
    </div>
    <div class="form-group">
      <label>Date</label>
      <input type="datetime-local" class="form-control" v-model="date" :readonly="readOnly" required>
    </div>
    <div class="form-group">
      <label>Note</label>
      <textarea class="form-control" v-model="item.note" placeholder="Input note for appointment" :readonly="readOnly"></textarea>
    </div>
  </form>
  <div v-else>
    No data
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Appointment } from "@/types/appointment"
import dayjs from 'dayjs'

@Component
export default class Item extends Vue { 
	@Prop({type: Object, default: () => null}) private item!: Appointment;
  @Prop({type: Boolean, default: () => false}) private readOnly!: boolean;

  get date() {
    return dayjs(this.item.date).format('YYYY-MM-DDTHH:mm:ss')
  }

  set date(value: string) {
    this.item.date = dayjs(value).toDate();
  }
}
</script>

<style scoped>
</style>
