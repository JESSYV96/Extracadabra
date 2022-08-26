<template>
  <div id="app">
    <h2>Distribution de nombres</h2>
    <Histogram />
  </div>
</template>

<script>
import Histogram from "./components/Histogram.vue"

export default {
  name: "App",
  components: {
    Histogram,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
