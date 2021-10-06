<template>
  <div class="shadow p-4">
    <p class="text-xl font-semibold mb-4">Devices: {{ Object.keys(devices).length }}</p>

    <table class="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <!-- <th>Description</th> -->
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(device, id) in devices" :key="id" class="hover:bg-gray-200 hand text-center" @click="redirectDeviceOverview(id)">
            <td>{{device.name}}</td>
            <!-- <td>{{device.description}}</td> -->
            <td>{{device.id}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
  computed: {
    devices () {
      const d = this.$store.getters['groups/getDevices'];
      return d;
    }
  }
})

export default class Devices extends Vue {
  // Properties

  // Computed Properties
  private devices: any;

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods
  private redirectDeviceOverview (id: string) {
    this.$router.push(`/dashboard/deviceoverview/${id}`);
  }
}
</script>

<style lang="scss" scoped>

</style>
