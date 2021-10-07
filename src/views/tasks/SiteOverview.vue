<template>
  <div class="shadow p-4">
    <div class="flex flex-wrap -mx-3 mb-20 mb-6">
      <div class="w-1/2 xl:w-1/2 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ site.name }}
            </p>
            <p>Site Name</p>
          </div>
        </div>
      </div>
      <div class="w-1/2 xl:w-1/2 px-3">
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">
              {{ Object.keys(siteDevices).length }}
            </p>
            <p>Site Devices</p>
          </div>
        </div>
      </div>
      <div
        v-for="(aggregatedMessage, key) in aggregatedMessages"
        :key="key"
        class="w-1/2 xl:w-1/2 px-3"
      >
        <div
          class="w-full bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="key === 'clients'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="key === 'rxGigabytes'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            v-if="key === 'txGigabytes'"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          <div class="text-gray-700">
            <p class="font-semibold text-3xl">{{ aggregatedMessage }}</p>
            <p>{{ key }}</p>
          </div>
        </div>
      </div>
      <div class="w-1/2">
        <div
          class="bg-white border text-blue-400 rounded-lg flex items-center p-6 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="{2}"
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <div class="w-full text-gray-700">
              <p class="font-semibold text-3xl">
                {{ site.metadata.geolocation.altitude }}
              </p>
              <p>altitude</p>
            </div>
            <div class="text-gray-700">
              <p class="font-semibold text-3xl">
                {{ site.metadata.geolocation.latitude }}
              </p>
              <p>latitude</p>
            </div>
            <div class="text-gray-700">
              <p class="font-semibold text-3xl">
                {{ site.metadata.geolocation.longitude }}
              </p>
              <p>longitude</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Watch } from 'vue-property-decorator'

interface AggregratedMessageProps {
  rxGigabytes: number
  txGigabytes: number
  clients: number
}

@Options({
  components: {},
  computed: {
    site() {
      const s = this.$store.getters['groups/getGroup'](
        this.$route.params.siteId,
      )
      if ('metadata' in s && s.metadata.type == 'Site') {
        return s
      }
      return {}
    },
    siteDevices() {
      const sD = this.$store.getters['groups/getSiteDevices'](
        this.$route.params.siteId,
      )
      return sD
    },
    siteThings() {
      const sT = this.$store.getters['things/getSiteThings'](
        this.$route.params.siteId,
      )
      return sT
    },
    siteMessages() {
      const m = this.$store.getters['messages/getMessages']
      return m
    },
    aggregatedMessages() {
      const deviceMessages: any = {}
      this.siteMessages.map((siteMessage: any) => {
        if (!(siteMessage.device in deviceMessages)) {
          deviceMessages[siteMessage.device] = {}
        }
        if (!(siteMessage.name in deviceMessages[siteMessage.device])) {
          if ('value' in siteMessage) {
            deviceMessages[siteMessage.device][siteMessage.name] =
              siteMessage.value
          }
          if ('string_value' in siteMessage) {
            deviceMessages[siteMessage.device][siteMessage.name] =
              siteMessage.string_value
          }
        }
      })
      const aggregatedMessages: AggregratedMessageProps = {
        rxGigabytes: 0,
        txGigabytes: 0,
        clients: 0,
      }
      for (const key in deviceMessages) {
        if ('rxBytes' in deviceMessages[key]) {
          aggregatedMessages.rxGigabytes += deviceMessages[key].rxBytes
        }
        if ('txBytes' in deviceMessages[key]) {
          aggregatedMessages.txGigabytes += deviceMessages[key].txBytes
        }
        if ('numSta' in deviceMessages[key]) {
          aggregatedMessages.clients += deviceMessages[key].numSta
        }
      }
      aggregatedMessages.rxGigabytes /= 1000000000
      aggregatedMessages.txGigabytes /= 1000000000
      return aggregatedMessages
    },
  },
})
export default class SiteOverview extends Vue {
  // Get last metric for each name
  // Properties
  private messageMetrics = [
    'guestNumSta',
    'guestRxBytes',
    'guestRxDropped',
    'guestRxErrors',
    'guestRxPackets',
    'guestTxBytes',
    'guestTxDropped',
    'guestTxErrors',
    'guestTxPackets',
    'guestTxRetries',
    'numSta',
    'rxBytes',
    'txBytes',
    'userNumSta',
    'userRxBytes',
    'userRxDropped',
    'userRxErrors',
    'userRxPackets',
    'userTxBytes',
    'userTxDropped',
    'userTxErrors',
    'userTxPackets',
    'userTxRetries',
  ]
  private siteLoaded = false

  // Computed Properties
  private site: any
  private siteDevices: any
  private siteThings: any
  private siteMessages: any

  // Watcher Functions
  // TODO think of cleaner way to implement this
  @Watch('site', { immediate: true })
  siteThingsChange(newVal: any) {
    if (!('id' in newVal) || this.siteLoaded) {
      return
    }

    const params = `site=${this.site.id}`
    this.$store.dispatch('messages/getMessages', {
      params: params,
      offset: 0,
      limit: 200,
    })
    this.siteLoaded = true
  }

  // Vue Lifecycle Functions
  beforeUnmount() {
    this.$store.dispatch('messages/reset')
  }

  // Methods
}
</script>

<style>
.icon {
  height: 50px;
  width: 50px;
  margin-right: 10px;
}
</style>
