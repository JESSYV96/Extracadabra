  <template>
  <div class="container">
    <input
      v-model.number.lazy="numberListCount"
      type="number"
      name="numberListLength"
    />
    <div class="histogram">
      <div v-for="(itemData, index) in occurencesNumber" :key="index">
        <BarItem :number="itemData[0]" :occurences="itemData[1]" />
      </div>
    </div>
    <button @click.prevent="() => getNumberListHandler(numberListCount)">
      Fetch numbers
    </button>
  </div>
</template>

<script>
import BarItem from "./BarItem.vue";
import {
  fetchNumbersList,
  getOcurrenceNumber,
} from "@/services/HistogramService";

export default {
  name: "Histogram",
  data() {
    return {
      numberListCount: 50,
      numberList: [],
    };
  },
  components: {
    BarItem,
  },
  async created() {
    this.numberList = [...(await fetchNumbersList(this.numberListCount))];
  },
  computed: {
    occurencesNumber: function () {
      return [...getOcurrenceNumber(this.numberList)].sort();
    },
  },
  methods: {
    /**
     * @param {number} numberListCount
     */
    async getNumberListHandler(numberListCount) {
      this.numberList = [...(await fetchNumbersList(numberListCount))];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .histogram {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 0.1rem;
  }
}
</style>