<template>
<div>
  <item-detail :item="item" />
  <div class="d-flex justify-content-between">
    <button class="btn btn-secondary" @click.stop="back">Back</button>
    <button class="btn btn-primary ml-2" @click.stop="next" :disabled="disableNext">Next</button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Appointment } from "@/types/appointment"
import ItemDetail from "./ItemDetail.vue";
import dayjs from 'dayjs';

@Component({
  components: {
    ItemDetail
  }
})
export default class Tab1 extends Vue {
  @Prop() private item!: Appointment;

  get disableNext() {
    return !this.item || !this.item.name || !dayjs(this.item.date).isValid(); 
  }

  @Emit()
  next() {
    return
  }

  @Emit()
  back() {
    return
  }
}
</script>

<style scoped>
</style>
