<script>
import LayoutExternal from './components/layouts/LayoutExternal'
import LayoutAuth from './components/layouts/LayoutAuth'
import SpriteSvg from './components/svg/SpriteSvg'
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
    <layout-auth v-if="isAuthenticate" class="l-main"></layout-auth>
    <Layout-external v-else></Layout-external>
  </div>
</template>
