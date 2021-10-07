<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Map</p>

      <p>
        Congratulations you've chosen the task of creating a map!
        Let's take a look at the tasks:
      </p>
      <ul class="p-4 mb-4">
        <li>Implement OpenStreetMap api</li>
        <li>Plot a sites geolocation with a summary pop up</li>
        <li>Plot a devices geolocation with a summary pop up</li>
        <li>Change from displaying sites to devices depending on zoom</li>
        <li>Additional tasks. Type correctly and create interface / classes for objects</li>
      </ul>

      <p>
        Some properties have been made accessible to you.
        You don't have to use them and can create your own.
        The properties currently accessible are:
      </p>
      <ul class="p-4 mb-4">
        <li>sites - An object containing all sites with key being id and value being site object</li>
        <li>devices - An object containing all devices with key being id and value being device object</li>
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
import { Watch } from 'vue-property-decorator';
import "leaflet/dist/leaflet.css"
import { LMap, LGeoJson, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { latLng } from "leaflet";

@Options({
  components: {
    LMap,
    LGeoJson,
    LTileLayer
  },
  computed: { 
    sites () {
      const s = this.$store.getters['groups/getSites'];
      return s;
    },
    devices () {
      const d = this.$store.getters['groups/getDevices'];
      return d;
    }
  }
})

export default class Map extends Vue {
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
  geojsonOptions = {};
  center = latLng(51.5897,-0.0409197);
  zoom = 16;

  // Computed Properties
  private sites: any;
  private devices: any;

  // Watcher Functions

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

  // Methods

}
</script>

<style lang="scss" scoped> 

</style>
