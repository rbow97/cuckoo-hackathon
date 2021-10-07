<template>
  <div class="shadow p-4">
    <div class="mb-6">
      <p class="text-3xl font-semibold mb-2 text-center">Map</p>

      <p>
        Congratulations you've chosen the task of creating a map! Let's take a
        look at the tasks:
      </p>
      <ul class="p-4 mb-4">
        <li>Implement OpenStreetMap api</li>
        <li>Plot a sites geolocation with a summary pop up</li>
        <li>Plot a devices geolocation with a summary pop up</li>
        <li>Change from displaying sites to devices depending on zoom</li>
        <li>
          Additional tasks. Type correctly and create interface / classes for
          objects
        </li>
      </ul>

      <p>
        Some properties have been made accessible to you. You don't have to use
        them and can create your own. The properties currently accessible are:
      </p>
      <ul class="p-4 mb-4">
        <li>
          sites - An object containing all sites with key being id and value
          being site object
        </li>
        <li>
          devices - An object containing all devices with key being id and value
          being device object
        </li>
      </ul>

      <p>
        If there is any other data you need access to please let us know and we
        can work on getting it to you. You should be able to complete this task
        within this component but feel free to create child components if needed
        :)
      </p>
    </div>
  </div>
  <l-map style="height:60vh" :zoom="zoom" @update:zoom="zoomUpdated">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <l-circle
      v-for="circle in siteCircles"
      :key="circle.id"
      :lat-lng="circle.center"
      :radius="zoomRadius"
      :color="circle.color"
      :name="circle.name"
      fillColor="#3388ff"
    >
      <l-popup>{{ circle.name }}</l-popup>
    </l-circle>
    <template v-if="showDevices">
      <l-marker
        v-for="device in deviceMarkers"
        :key="device.id"
        :lat-lng="device.latLong"
      >
        <l-popup>{{ device.name }}</l-popup>
      </l-marker>
    </template>
  </l-map>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component"
import "leaflet/dist/leaflet.css"
import {
  LMap,
  LTileLayer,
  LCircle,
  LPopup,
  LMarker,
} from "@vue-leaflet/vue-leaflet"

@Options({
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 0,
    }
  },
  computed: {
    sites() {
      const s = this.$store.getters["groups/getSites"]
      return s
    },
    devices() {
      const d = this.$store.getters["groups/getDevices"]
      return d
    },
    zoomRadius() {
      const maxZoom = 20

      const zoomRadius = (maxZoom - this.zoom) * 9000

      console.log("Radius:: ", zoomRadius)

      return zoomRadius
    },
    showDevices() {
      return this.zoom >= 5
    },
    siteCircles() {
      const sitesMapped = Object.keys(this.sites).map((siteKey) => {
        const siteObj = this.sites[siteKey]
        return {
          id: siteKey,
          name: siteObj.name,
          center: [
            siteObj.metadata.geolocation.latitude,
            siteObj.metadata.geolocation.longitude,
          ],
          color: "green",
        }
      })

      return sitesMapped
    },
    deviceMarkers() {
      console.log("Devices:: ", this.devices)
      const devicesMapped = Object.keys(this.devices).map((deviceKey) => {
        const device = this.devices[deviceKey]
        return {
          id: deviceKey,
          name: device.name,
          latLong: [
            device.metadata.geolocation.latitude,
            device.metadata.geolocation.longitude,
          ],
        }
      })

      return devicesMapped
    },
  },
  methods: {
    zoomUpdated(zoom: number) {
      console.log("New Zoom:: ", zoom)
      this.zoom = zoom
    },
  },
})
export default class Map extends Vue {}
</script>

<style lang="scss" scoped></style>
