<template>
  <UplotVue
    :data="data"
    :options="options"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
  computed: {

  }
})

export default class  extends Vue {
  // Properties
  private data = [];
  private options = {
    title: "Test",
    width: 500,
    height: 300,
    series: [
      {
        label: "Date",
      },
      {
        label: "",
        points: { show: false },
        stroke: "#00437a",
        fill: "#00437a22",
      },
    ],
    scales: { x: { time: false } },
  };

  // Computed Properties

  // Watcher Functions

  // Vue Lifecycle Functions
  beforeMount() {
    this.data = [
      [...new Array(1000)].map((_, i) => i),
      [...new Array(1000)].map((_, i) => i % 1000),
    ];
  }

  // Methods

}
</script>
