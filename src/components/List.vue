<template>
<div>
  <div class="my-1" v-for="(item, index) in items" :key="index">
    <div class="input-group">
      <div class="form-control input-group-text" :class="{'complete': item.complete}">{{dateToShow(item)}} {{item.name}}</div>
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input type="checkbox" value="complete" :checked="item.complete" @change="change(index)">
        </div>
      </div>
      <div class="input-group-append">
        <button type="button" class="btn btn-primary" @click.stop="remove(index)"> X </button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Appointment } from "@/types/appointment"

@Component
export default class Tab1 extends Vue {
  @Prop({type: Array}) private items!: Appointment[];

  dateToShow(v: Appointment) {
    return Appointment.dateToShow(v);
  }

  remove(index: number) {
    if (confirm("Are you sure to delete this appointment?")){
        this.$emit("remove", index);
    }
  }

  change(index: number) {
    this.$emit('complete', index);
  }

}
</script>

<style scoped>
.complete {
    text-decoration: line-through;
}
</style>
