<script>
export default {
  name: 'LayoutExternal'
}
</script>

<template>
  <div class="l-layout">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
