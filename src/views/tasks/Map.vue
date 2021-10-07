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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

import { latLng } from 'leaflet'

@Options({
  components: {},
  computed: {
    sites() {
      const s = this.$store.getters['groups/getSites']
      return s
    },
    devices() {
      const d = this.$store.getters['groups/getDevices']
      return d
    },
  },
})
export default class Map extends Vue {
  // Properties
  geojson = {
    type: 'FeatureCollection',
    features: {
      geometry: {
        type: 'Point',
        coordinates: [-104.99404, 39.75621],
      },
    },
  }
  geojsonOptions = {}
  center = latLng(51.5897, -0.0409197)
  zoom = 16

  // Computed Properties
  private sites: any
  private devices: any

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods
}
</script>

<style lang="scss" scoped></style>
