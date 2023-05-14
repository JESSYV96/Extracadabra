<template>
  <div>
    <h2>Distribution de nombres</h2>
    <div class="container">
      <input v-model.number.lazy="numberHistogram.numberListCount" type="number" name="numberListLength">
      <Histogram :number-list="numberHistogram.numberList" />
      <button @click.prevent="() => getNumberListHandler(numberHistogram.numberListCount)">
        Fetch numbers
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Histogram from "./components/Histogram.vue";
import { fetchNumbersList } from "./services/HistogramService";
import { onBeforeMount, reactive } from 'vue'

type Histogram = {
  numberListCount: number
  numberList: string[]
}
const numberHistogram = reactive<Histogram>({
  numberListCount: 35,
  numberList: [],
})

const getNumberListHandler = async (numberListCount: number) => {
  numberHistogram.numberList = [...(await fetchNumbersList(numberListCount))];
}

onBeforeMount(async () => {
  getNumberListHandler(numberHistogram.numberListCount)
})

// export default {
//   name: "App",
//   components: {
//     Histogram,
//   },
//   data: () => {
//     return {
//       numberListCount: 50,
//       numberList: [],
//     };
//   },
//   async created() {
//   },
//   methods: {
//     /**
//      * @param {number} numberListCount
//      */
//     async getNumberListHandler(numberListCount) {
//       this.numberList = [...(await fetchNumbersList(numberListCount))];
//     },
//   },
// };
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
