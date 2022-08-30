<template>
  <div id="app">
    <h2>Distribution de nombres</h2>
    <div class="container">
      <input
        v-model.number.lazy="numberListCount"
        type="number"
        name="numberListLength"
      />
      <Histogram :numberList="numberList" />
      <button @click.prevent="() => getNumberListHandler(numberListCount)">
        Fetch numbers
      </button>
    </div>
  </div>
</template>

<script>
import Histogram from "./components/Histogram.vue";
import { fetchNumbersList } from "./services/HistogramService";

export default {
  name: "App",
  components: {
    Histogram,
  },
  data: () => {
    return {
      numberListCount: 50,
      numberList: [],
    };
  },
  async created() {
    this.numberList = [...(await fetchNumbersList(this.numberListCount))];
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
}
</style>
