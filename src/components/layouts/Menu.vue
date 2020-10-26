<script>
import { mapActions, mapGetters } from 'vuex'
import Icon from '../svg/icon'

export default {
  name: 'Menu',
  components: { Icon },
  computed: {
    ...mapGetters({
      user: 'user/user'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/logout'
    }),
    onLogout () {
      this.logout()
      this.$router.push({ name: 'auth.index' })
      setTimeout(() => {
        window.location.reload()
      })
    }
  }
}
</script>

<template>
  <nav class="m-menu" tabindex="0">
    <div class="m-menu_trigger"></div>
    <header class="m-menu_avatar">
      <img src="static/images/users/profile.jpg"
           width="128" />
    </header>
    <ul>
      <li tabindex="0" title="Dashboard">
        <icon name="ic-panel" class="m-icon--sm"></icon>
        <span>Dashboard</span>
      </li>
      <li tabindex="0"
          title="Sair"
          ref="logout"
          @click="onLogout()">
        <icon name="ic-sing-out" class="m-icon--sm"></icon>
        <span>Sair</span>
      </li>
    </ul>
  </nav>
</template>
