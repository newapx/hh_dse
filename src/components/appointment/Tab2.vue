<template>
<div>
  <item-detail :item="item" :read-only="true"/>
  <div class="d-flex justify-content-between">
    <button class="btn btn-secondary" @click.stop="back">Back</button>
    <button v-if="item" class="btn btn-primary ml-2" @click.stop="next">Create</button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { Appointment } from "@/types/appointment"
import ItemDetail from "./ItemDetail.vue";

@Component({
  components: {
    ItemDetail
  }
})
export default class Tab1 extends Vue {
  @Prop() private item!: Appointment;

  @Emit()
  back() {
    return
  }

  @Emit()
  next() {
    return
  }
}
</script>

<style scoped>
</style>
