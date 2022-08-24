<template>
  <div class="barItem">
    <div class="bar" :style="heightBarStyle">{{ occurences }}</div>
    <span>{{ number }}</span>
  </div>
</template>

<script>
export default {
  name: "BarItem",
  props: {
    number: {
      type: String,
      required: true,
    },
    occurences: {
      type: Number,
      required: true,
    },
  },
  computed: {
    // Does not works with () => {} ????
    heightBarStyle: function () {
      return {
        height: `${this.occurences * 10}px`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.barItem {
  display: inline-flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 15px;
  .bar {
    color: white;
    background-color: blue;
    height: 150px;
    width: 25px;
  }
}
</style>