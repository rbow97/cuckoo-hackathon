<template>
<div class="leading-normal tracking-normal" id="main-body">
  <div class="flex flex-wrap">

    <Sidebar />

    <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

    <Navbar />

    <div class="p-6 bg-gray-100 mb-20">
      <router-view v-if="token" />
    </div>

    <Footer />

    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex'
import { Watch } from 'vue-property-decorator';
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

@Options({
  components: {
    Sidebar,
    Navbar,
    Footer
  },
  computed: {
    ...mapState({
      token: (state: any) => state.mainflux.user.token
    })
  }
})

export default class Dashboard extends Vue {
  // Properties
  private sideBarOpen = false;
  private tokenLoaded = false;

  // Computed Properties

  // Watcher Functions
  @Watch('token')
  tokenChange (newVal: string) {
    if (newVal && !this.tokenLoaded) {
      this.tokenLoaded = true;
      this.$store.dispatch("groups/getGroups");
    }
  }

  // Vue Lifecycle Functions
  beforeMount() {
    this.$store.dispatch('createToken');
  }

  // Methods

}
</script>
