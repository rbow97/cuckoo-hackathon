<template>
    <!-- give the sidebar z-50 class so its higher than the navbar if you want to see the logo -->
    <!-- you will need to add a little "X" button next to the logo in order to close it though -->
    <div class="w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen lg:block bg-gray-100 border-r z-30" :class="sideBarOpen ? '' : 'hidden'" id="main-nav">

          <div class="w-full h-20 border-b flex px-4 items-center mb-8">
            <p class="font-semibold text-3xl text-purple-800 pl-4">Jangala</p>
          </div>

          <div class="mb-4 px-4">
            <p class="pl-4 text-sm font-semibold mb-1">MAIN</p>

            <router-link to="/dashboard/sites">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/home.svg" /> -->
                <span class="text-gray-700">Sites</span>
              </div>
            </router-link>

            <router-link to="/dashboard/devices">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/home.svg" /> -->
                <span class="text-gray-700">Devices</span>
              </div>
            </router-link>

            <p class="pl-4 text-sm font-semibold mb-1">TASKS</p>
            <router-link to="/dashboard/hackathonoverview">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/home.svg" /> -->
                <span class="text-gray-700">Hackathon Overview</span>
              </div>
            </router-link>

            <router-link to="/dashboard/siteoverview/01FHB330JZAB2QNJ3YV52ET7P2">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/chart.svg" /> -->
                <span class="text-gray-700">Site Overview</span>
              </div>
            </router-link>

            <router-link to="/dashboard/deviceoverview/01FHB33659RWM0X495B1M0TP11">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/suitcase.svg" /> -->
                <span class="text-gray-700">Device Overview</span>
              </div>
            </router-link>

            <router-link to="/dashboard/componentoverview/c0361c64-06d2-49c5-8d0f-599cad612aba">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/suitcase.svg" /> -->
                <span class="text-gray-700">Component Overview</span>
              </div>
            </router-link>

            <router-link to="/dashboard/map">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/calendar.svg" /> -->
                <span class="text-gray-700">Map</span>
              </div>
            </router-link>

            <router-link to="/dashboard/heatmap">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/calendar.svg" /> -->
                <span class="text-gray-700">Heat Map</span>
              </div>
            </router-link>

            <router-link to="/dashboard/graphs">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/pen.svg" /> -->
                <span class="text-gray-700">Graphs</span>
              </div>
            </router-link>

            <router-link to="/dashboard/multigraph">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/pen.svg" /> -->
                <span class="text-gray-700">Multi Graph</span>
              </div>
            </router-link>

            <router-link to="/dashboard/zoomablegraph">
              <div class="w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer">
                <!-- <img class="h-6 w-6 fill-current mr-2" src="@/assets/pen.svg" /> -->
                <span class="text-gray-700">Zoomable Graph</span>
              </div>
            </router-link>
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

export default class mapState extends Vue {
  // Properties
  private sideBarOpen = false;

  // Computed Properties

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods

}
</script>

<style lang="scss">
.router-link-exact-active div {
  background-color: rgba(237, 242, 247, 200);
  cursor: pointer;
}
</style>
