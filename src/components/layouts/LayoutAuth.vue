<script>
import AppSidebar from './Sidebar'
export default {
  name: 'LayoutAuth',
  components: { AppSidebar }
}
</script>

<template>
  <div class="l-layout">
    <app-sidebar />

    <main class="l-layout_content">
      <transition name="fade">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<style lang="scss">
  @import '../../assets/scss/utilities/_all';

  .l-layout {
    &_content {
      height: inherit;
      padding: $gap-rem--xsl;
    }
  }
</style>
