<template>
  <div class="shadow p-4">
    <div class="mb-4">
      <p class="text-3xl font-semibold mb-2 text-center">Hackathon Overview</p>
      <p>
        Today you are challenged with the momentous task of helping design and create Jangala's dashboard.
        The tasks assigned will be around displaying the metrics received from Big Boxes out in the field.
        We're hoping with the strength of Cuckoo's development team alongside Jangala's development team we can unite
        to create a beautiful dashboard along with a better tomorrow!
      </p>
    </div>

    <div class="mb-4">
      <p class="text-2xl font-semibold mb-2">Technology Choices</p>
      <p>The technology choices are as followed:</p>
      <ul class="p-4">
        <li>Vue3 - Frontend framework, similar to react</li>
        <li>Vuex4 - State management, similar to redux</li>
        <li>Tailwind1 - CSS framework</li>
        <li>Typescript - JavaScript can also be used in preferred</li>
        <li>OpenStreetMap - Map api</li>
        <li>uPlot - Charting library</li>
      </ul>
    </div>

    <div class="mb-4">
      <p class="text-2xl font-semibold mb-2">Tasks</p>
      <p>Each task is self-contained within a vue component, accessible by link in the side-bar</p>
      <p>Services have been connected up so that all of the data required by the task is available</p>
      <p>The tasks for today are as follows:</p>
      <ul class="p-4">
        <li>Site Overview - Create an overview for a site</li>
        <li>Device Overview - Create an overview for a device</li>
        <li>Component Overview - Create an overview for a component</li>
        <li>Heat Map - Create a heat map of where our Big Boxes have travelled</li>
        <li>Map - Display our sites and devices on a map across the globe</li>
        <li>Graphs - Display multiple graphs</li>
        <li>Multi Graph - Display multiple components(things) on a graph and overlay graphs with two different metrics</li>
        <li>Zoomable Graph - Implement smooth scalable zooming on graphs</li>
      </ul>
    </div>

    <div class="mb-4">
      <p class="text-2xl font-semibold mb-2">Useful Links</p>
      <p>Below is a list of links that may be useful throughout the day:</p>
      <ul class="p-4">
        <li><a href="https://github.com/Murked/vue-tailwind-admin" class="hover:bg-gray-200" target="_blank">Tailwind Dashboard Used For CSS Reference</a></li>
        <li><a href="https://github.com/leeoniya/uPlot" class="hover:bg-gray-200" target="_blank">uPlot Git Repo</a></li>
        <li><a href="https://github.com/skalinichev/uplot-wrappers" class="hover:bg-gray-200" target="_blank">uPlot Wrapper Repo</a></li>
        <li><a href="https://wiki.openstreetmap.org/wiki/Frameworks#Webmaps" class="hover:bg-gray-200" target="_blank">Open Street Maps Docs</a></li>
        <li><a href="https://v3.vuejs.org/" class="hover:bg-gray-200" target="_blank">Vue3 Docs</a></li>
        <li><a href="https://next.vuex.vuejs.org/" class="hover:bg-gray-200" target="_blank">Vuex4 Docs</a></li>
        <li><a href="https://tailwindcss.com/" class="hover:bg-gray-200" target="_blank">Tailwind Docs</a></li>
        <li><a href="https://www.typescriptlang.org/docs/" class="hover:bg-gray-200" target="_blank">TypeScript Docs</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
  computed: {

  }
})

export default class HackathonOverview extends Vue {
  // Properties

  // Computed Properties

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods

}
</script>
