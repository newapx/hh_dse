<template>
<div>
  <item-detail :item="item" :read-only="true"/>
  <button @click.stop="back">Back</button>
  <button v-if="item" @click.stop="next">Create</button>
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
