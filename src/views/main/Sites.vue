<template>
  <div class="shadow p-4">
    <p class="text-xl font-semibold mb-4">Sites: {{ Object.keys(sites).length }}</p>

    <table class="w-full">  
      <thead>
        <tr>
          <th>Name</th>
          <!-- <th>Description</th> -->
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(site, id) in sites" :key="id" class="hover:bg-gray-200 hand text-center" @click="redirectSiteOverview(id)">
            <td>{{site.name}}</td>
            <!-- <td>{{site.description}}</td> -->
            <td>{{id}}</td>
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
    sites () {
      const s = this.$store.getters['groups/getSites'];
      return s;
    },
  }
})

export default class Sites extends Vue {
  // Properties

  // Computed Properties
  private sites: any;

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods
  private redirectSiteOverview (id: string) {
    this.$router.push(`/dashboard/siteoverview/${id}`);
  }
}
</script>

<style lang="scss" scoped>

</style>
