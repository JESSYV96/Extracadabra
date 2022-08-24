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
        transition: "height 0.8s",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.barItem {
  display: inline-flex;
  flex-direction: column;
  .bar {
    color: white;
    background: var(--primary-color);
    background: linear-gradient(
      100deg,
      var(--primary-color),
      5%,
      var(--secondary-color) 100%
    );
    height: 100px;
    width: 2.5rem;
  }
}
</style>