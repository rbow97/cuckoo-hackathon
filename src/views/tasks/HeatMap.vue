<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Heat Map</p>

      <p>
        Congratulations you've chosen the task of creating a heat map!
        Let's take a look at the tasks:
      </p>
      <ul class="p-4 mb-4">
        <li>Implement OpenStreetMap api</li>
        <li>Take a device's geolocation and plot them on the map</li>
        <li>Convert this plotted points into a heat map dependent on how long a device was in an area</li>
        <li>Additional tasks. Type correctly and create interface / classes for objects</li>
      </ul>

      <p>
        Some properties have been made accessible to you.
        You don't have to use them and can create your own.
        The properties currently accessible are:
      </p>
      <ul class="p-4 mb-4">
        <li>device - An object containing device information</li>
        <li>deviceThings - An object of device things with key being id and value being thing object</li>
        <li>deviceMessages - An array of geolocation messages from a device</li>
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
    device () {
      const d = this.$store.getters['groups/getGroup'](this.deviceId);

      if ("metadata" in d && d.metadata.type == "Device") {
        return d;
      }

      return {};
    },
    deviceThings () {
      const dC = this.$store.getters['things/getDeviceThings'](this.deviceId);
      return dC;
    },
    deviceMessages () {
      const m = this.$store.getters['messages/getMessages'];
      return m;
    }
  }
})

export default class HeatMap extends Vue {
  // Properties
  private deviceId = "01FH5FA5P2CW8B9V5FVB1TGHCQ";

  // Computed Properties
  private device: any;
  private deviceThings: any;
  private deviceMessages: any;

  // Watcher Functions
  // TODO think of cleaner way to implement this
  @Watch('deviceThings', { immediate: true })
  deviceThingsChange (newVal: any, oldVal: any) {
    const name = "geolocation";
    const newThings: { [key: string]: any; } = {};
    for (const id in newVal) {
      if (oldVal == undefined || !(id in oldVal)) {
        newThings[id] = newVal[id];
      }
    }

    for (const id in newThings) {
      const newThing = newThings[id];
      // Get only with geo location name
      this.$store.dispatch("messages/getThingMessages", { thing: newThing, name: name});
    }
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
