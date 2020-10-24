<script>
import LayoutExternal from './components/layouts/LayoutExternal'
import LayoutAuth from './components/layouts/LayoutAuth'
import SpriteSvg from './components/svg/sprite-svg'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { SpriteSvg, LayoutAuth, LayoutExternal },
  computed: {
    ...mapGetters('user', ['isAuthenticate'])
  }
}
</script>

<template>
  <div id="app">
    <sprite-svg />
    <layout-auth v-if="isAuthenticate"
                 class="l-main" />
    <Layout-external v-else />
  </div>
</template>
