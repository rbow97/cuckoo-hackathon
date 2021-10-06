<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Component Overview</p>

      <p>
        Congratulations you've chosen the task of creating a component overview!
        Before diving into the tasks let's breakdown what a component is:
      </p>
      <ul class="p-4 mb-4">
        <li>A component is alias for a thing</li>
        <li>A component speaks directly to the cloud services and send up metrics</li>
        <li>A components parent is a device</li>
        <li>An example of a component in a Big Box would be an access point</li>
      </ul>

      <p>Now we know what a component is, let's look at the tasks:</p>
      <ul class="p-4 mb-4">
        <li>Implement uPlot library</li>
        <li>Display all metrics for a component</li>
        <li>Additional tasks. Type correctly and create interface / classes for objects</li>
      </ul>

      <p>
        Some properties have been made accessible to you.
        You don't have to use them and can create your own.
        The properties currently accessible are:
      </p>
      <ul class="p-4 mb-4">
        <li>messageMetrics - An array of names of the metrics to be displayed</li>
        <li>thing - An object containing thing information</li>
        <li>thingMessages - An array of all thing messages sent from thing</li>
      </ul>

      <p>
        If there is any other data you need access to please let us know and we can work on getting it to you.
        You should be able to complete this task within this component but feel free to create child components if needed :)
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Options({
  components: {

  },
  computed: {
    thing () {
      const t = this.$store.getters['things/getThing'](this.$route.params.thingId);
      return t;
    },
    thingMessages () {
      const m = this.$store.getters['messages/getMessages'];
      return m;
    }
  }
})

export default class ComponentOverview extends Vue {
  // Properties
  private messageMetrics = [
    'guestNumSta', 'guestRxBytes', 'guestRxDropped', 'guestRxErrors', 'guestRxPackets',
    'guestTxBytes', 'guestTxDropped', 'guestTxErrors', 'guestTxPackets', 'guestTxRetries',
    'numSta', 'rxBytes', 'txBytes', 'userNumSta', 'userRxBytes', 'userRxDropped', 'userRxErrors',
    'userRxPackets', 'userTxBytes', 'userTxDropped', 'userTxErrors', 'userTxPackets', 'userTxRetries'
  ];
  private thingLoaded = false;

  // Computed Properties
  private thing: any;
  private thingMessages: any;

  // Watcher Functions
  // TODO think of cleaner way to implement this
  @Watch('thing', { immediate: true })
  thingChange (newVal: any) {
    if (!('id' in newVal) || this.thingLoaded) {
      return;
    }

    const params = `component=${this.thing.id}`;
    this.$store.dispatch("messages/getMessages", { params: params, offset: 0, limit: 200 });
    this.thingLoaded = true;
  }

  // Vue Lifecycle Functions
  beforeUnmount () {
    this.$store.dispatch("messages/reset");
  }

  // Methods

}
</script>

<style lang="scss" scoped>

</style>
