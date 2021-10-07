<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Multi Graph</p>

      <p>
        Congratulations you've chosen the task of creating multi graph!
        Let's take a look at the tasks:
      </p>
      <ul class="p-4 mb-4">
        <li>Implement uPlot chart, example in uPlot.vue</li>
        <li>Filter by dates, site, device, thing and name</li>
        <li>Be able to multi select devices, things and names</li>
        <li>Implement a line graph which can display multiple things for a metric</li>
        <li>Implement a line graph which has two different metrics for a y and x axis</li>
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

@Options({
  components: {

  },
  computed: {
    sites () {
      const s = this.$store.getters['groups/getSites'];
      return s;
    },
    sitesDevices () {
      const sd = [];
      for (let i = 0; i < this.siteIds.length; i++) {
        const d = this.$store.getters['groups/getSiteDevices'](this.siteIds[i]);
        sd.push(d);
      }
      return sd;
    },
    devicesThings () {
      const dt = [];
      for (let i = 0; i < this.deviceIds.length; i++) {
        const t = this.$store.getters['groups/getDeviceThings'](this.deviceIds[i]);
        dt.push(t)
      }
      return dt;
    },
    things () {
      const ts = [] ;
      for (let i = 0; i < this.thingIds.length; i++) {
        const t = this.$store.getters['things/getThing'](this.thingId);
        ts.push(t);
      }
      return ts;
    },
    thingsMessages () {
      const m = this.$store.getters['messages/getMessages'];
      return m;
    }
  }
})

export default class MultiGraph extends Vue {
  // Properties
  private messageMetrics = [
    'guestNumSta', 'guestRxBytes', 'guestRxDropped', 'guestRxErrors', 'guestRxPackets',
    'guestTxBytes', 'guestTxDropped', 'guestTxErrors', 'guestTxPackets', 'guestTxRetries',
    'numSta', 'rxBytes', 'txBytes', 'userNumSta', 'userRxBytes', 'userRxDropped', 'userRxErrors',
    'userRxPackets', 'userTxBytes', 'userTxDropped', 'userTxErrors', 'userTxPackets', 'userTxRetries'
  ];
  private siteIds = [];
  private deviceIds = [];
  private thingIds = [];
  private metricNames = [];

  // Computed Properties
  private sites: any;
  private sitesDevices: any;
  private devicesThings: any;
  private things: any;
  private thingsMessages: any;

  // Watcher Functions
  // TODO Watcher should be added here to get messages when thingId updates.
  // If new thingId selected old messages should be deleted for that thingId

  // Vue Lifecycle Functions
  beforeUnmount () {
    this.$store.dispatch("messages/reset");
  }

  // Methods

}
</script>
