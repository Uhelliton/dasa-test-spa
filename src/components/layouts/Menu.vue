<script>
import { mapActions, mapGetters } from 'vuex'
import Icon from '../svg/icon'

export default {
  name: 'Menu',
  components: { Icon },
  computed: {
    ...mapGetters('user', ['user'])
  },
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
  <nav class="m-menu" tabindex="0">
    <div class="m-menu_trigger"></div>
    <header class="m-menu_avatar">
      <img src="https://avatars3.githubusercontent.com/u/14768762?s=460&u=85195cde1906a2c9a1214b54375b4fc3ddd02c57&v=4"
           width="128" />
      <h2>{{ user.name }}</h2>
    </header>
    <ul>
      <li tabindex="0">
        <icon name="ic-xxx" class="m-icon--sm"></icon>
        <span>Dashboard</span>
      </li>
      <li tabindex="0"
          @click="onLogout()"
          class="icon-settings">
        <icon name="ic-xxx" class="m-icon--sm"></icon>
        <span>Sair</span>
      </li>
    </ul>
  </nav>
</template>
