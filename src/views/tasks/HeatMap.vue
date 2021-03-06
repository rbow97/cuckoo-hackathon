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
  <l-map style="height:60vh" :center="center" v-model:zoom="zoom">
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
  </l-map>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { Watch } from 'vue-property-decorator';
import { latLng } from "leaflet";

import { GeoOptions } from '../../types';

@Options({
  components: {
    LMap,
    LGeoJson,
    LTileLayer
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
  geojson = {
    type: "FeatureCollection",
    features: {
      "geometry": {
          "type": "Point",
          "coordinates": [-104.99404, 39.75621]
      }
    }
  };
  geojsonOptions: GeoOptions = {};
  center = latLng(51.5897,-0.0409197);
  zoom = 10;

  private deviceId = "01FHB33659RWM0X495B1M0TP11";
  private deviceLoaded = false;

  // Computed Properties
  private device: any;
  private deviceThings: any;
  private deviceMessages: any;

  // Watcher Functions
  // TODO think of cleaner way to implement this
  @Watch('device', { immediate: true })
  deviceThingsChange (newVal: any) {
    if (!('id' in newVal) || this.deviceLoaded) {
      return;
    }
    const name = "geolocation";
    const params = `device=${this.device.id}&name=${name}`;
    this.$store.dispatch("messages/getMessages", { params: params, offset: 0, limit: 200 });
    this.deviceLoaded = true;
  }

  // Vue Lifecycle Functions

  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) => {
      // circleMarker(latLng, { radius: 8 }
      console.log(feature)
      console.log(latLng)
      console.log('a');
    }
  }

  beforeUnmount () {
    this.$store.dispatch("messages/reset");
  }

  // Methods

}
</script>

<style lang="scss" scoped>

</style>
