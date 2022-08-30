<template>
  <div class="histogram">
    <div v-for="(itemData, index) in occurencesNumber" :key="index">
      <BarItem :number="itemData[0]" :occurences="itemData[1]" />
    </div>
  </div>
</template>

<script>
import BarItem from "./BarItem.vue";
import { getOcurrenceNumber } from "../services/HistogramService";

export default {
  name: "Histogram",
  props: {
    numberList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    BarItem,
  },
  computed: {
    occurencesNumber: function () {
      return [...getOcurrenceNumber(this.numberList)].sort();
    },
  },
};
</script>

<style lang="scss" scoped>
.histogram {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.1rem;
}
</style>