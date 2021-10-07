<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Graphs</p>

      <p>
        Congratulations you've chosen the task of creating graphs!
        Let's take a look at the tasks:
      </p>
      <ul class="p-4 mb-4">
        <li>Implement uPlot chart, example in uPlot.vue</li>
        <li>Filter by dates, site, device, thing and name</li>
        <li>Implement different kinds of graphs to display a things metric</li>
        <li>Additional tasks. Type correctly and create interface / classes for objects</li>
      </ul>

      <p>
        Some properties have been made accessible to you.
        You don't have to use them and can create your own.
        The properties can be found in the MultiGraph class
      </p>

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
    sites () {
      const s = this.$store.getters['groups/getSites'];
      return s;
    },
    siteDevices () {
      const d = this.$store.getters['groups/getSiteDevices'](this.siteId);
      return d;
    },
    deviceThings () {
      const dt = this.$store.getters['groups/getDeviceThings'](this.deviceId);
      return dt;
    },
    thing () {
      const t = this.$store.getters['things/getThing'](this.thingId);
      return t;
    },
    thingMessages () {
      const m = this.$store.getters['messages/getMessages'];
      return m;
    }
  }
})

export default class Graphs extends Vue {
  // Properties
  private messageMetrics = [
    'guestNumSta', 'guestRxBytes', 'guestRxDropped', 'guestRxErrors', 'guestRxPackets',
    'guestTxBytes', 'guestTxDropped', 'guestTxErrors', 'guestTxPackets', 'guestTxRetries',
    'numSta', 'rxBytes', 'txBytes', 'userNumSta', 'userRxBytes', 'userRxDropped', 'userRxErrors',
    'userRxPackets', 'userTxBytes', 'userTxDropped', 'userTxErrors', 'userTxPackets', 'userTxRetries'
  ];
  private siteId = "";
  private deviceId = "";
  private thingId = "";
  private metricName = "";

  // Computed Properties
  private sites: any;
  private siteDevices: any;
  private deviceThings: any;
  private thing: any;
  private thingMessages: any;

  // Watcher Functions
  // TODO Watcher should be added here to get messages when thingId updates.
  // If new thingId selected old messages should be deleted

  // Vue Lifecycle Functions
  beforeUnmount () {
    this.$store.dispatch("messages/reset");
  }

  // Methods

}
</script>

<style lang="scss" scoped>

</style>
