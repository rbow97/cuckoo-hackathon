<template>
  <div class="w-full border-t-2 px-8 py-6 lg:flex justify-between items-center">
    <p class="mb-2 lg:mb-0">© Copyright {{ new Date().getFullYear() }}</p>

    <div class="flex">
      <a href="https://www.janga.la/about-us" target="_blank" class="hover:text-gray-900">About Us</a>
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

export default class Footer extends Vue {
  // Properties

  // Computed Properties

  // Watcher Functions

  // Vue Lifecycle Functions

  // Methods

}
</script>
