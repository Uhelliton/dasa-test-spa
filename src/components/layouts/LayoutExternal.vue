<script>
import AuthIndex from '@/app/pages/auth/views/AuthIndex'
export default {
  name: 'LayoutExternal',
  components: { AuthIndex },
  data: () => ({})
}
</script>

<template>
  <div class="l-layout">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
