<script>
import { mapActions } from 'vuex'
export default {
  name: 'Menu',
  methods: {
    ...mapActions('user', ['logout']),
    onLogout () {
      this.logout()
      this.$router.push({ name: 'auth.index' })
    }
  }
}
</script>

<template>
  <nav class="menu" tabindex="0">
    <div class="smartphone-menu-trigger"></div>
    <header class="avatar">
      <img src="https://avatars3.githubusercontent.com/u/14768762?s=460&u=85195cde1906a2c9a1214b54375b4fc3ddd02c57&v=4"
           width="128" />
      <h2>Uhelliton Andrade.</h2>
    </header>
    <ul>
      <li tabindex="0" class="icon-dashboard">
        <span>Dashboard</span>
      </li>
      <li tabindex="0"
          @click="onLogout()"
          class="icon-settings">
        <span>Sair</span>
      </li>
    </ul>
  </nav>
</template>
