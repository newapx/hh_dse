<template>
<div>
  <div v-for="(item, index) in items" :key="index" :class="{'complete': item.complete}">
    <span>{{dateToShow(item)}}</span> <span>{{item.name}}</span>
    <input type="checkbox" value="complete" v-model="item.complete">
    <button @click.stop="remove(index)"> X </button>
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

}
</script>

<style scoped>
.complete {
    text-decoration: line-through;
}
</style>
