import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/components/layout/Dashboard.vue'

//Main
import Sites from '@/views/main/Sites.vue'
import Devices from '@/views/main/Devices.vue'

// Tasks
import HackathonOverview from '@/views/tasks/HackathonOverview.vue'
import SiteOverview from '@/views/tasks/SiteOverview.vue'
import DeviceOverview from '@/views/tasks/DeviceOverview.vue'
import ComponentOverview from '@/views/tasks/ComponentOverview.vue'
import HeatMap from '@/views/tasks/HeatMap.vue'
import Map from '@/views/tasks/Map.vue'
import Graphs from '@/views/tasks/Graphs.vue'
import MultiGraph from '@/views/tasks/MultiGraph.vue'
import ZoomableGraph from '@/views/tasks/ZoomableGraph.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'HackathonOverview' } },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: 'sites', name: 'Sites', component: Sites },
      { path: 'devices', name: 'Devices', component: Devices },
      // Tasks
      // TODO look at why redirect isn't working
      { path: '/', redirect: { name: 'HackathonOverview' } },
      { path: 'hackathonoverview', name: 'HackathonOverview', component: HackathonOverview },
      { path: 'siteoverview/:siteId', name: 'SiteOverview', component: SiteOverview },
      { path: 'deviceoverview/:deviceId', name: 'DeviceOverview', component: DeviceOverview },
      { path: 'componentoverview/:thingId', name: 'ComponentOverview', component: ComponentOverview },
      { path: 'heatmap', name: 'HeatMap', component: HeatMap },
      { path: 'multigraph', name: 'MultiGraph', component: MultiGraph },
      { path: 'map', name: 'Map', component: Map },
      { path: 'graphs', name: 'Graphs', component: Graphs },
      { path: 'multigraph', name: 'MultiGraph', component: MultiGraph },
      { path: 'zoomablegraph', name: 'ZoomableGraph', component: ZoomableGraph }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
