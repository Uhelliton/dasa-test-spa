<template>
  <div>
    <form autocomplete="off"
            @submit.prevent="onAuthenticate"
            class="m-form"
            method="post"
            ref="form">
      <app-input for-id="1"
                 label="Email"
                 placeholder="seunome@email.com"
                 v-model="form.email">
      </app-input>

      <app-input for-id="1"
                 label="Senha"
                 placeholder="******"
                 type="password"
                 v-model="form.password">
      </app-input>

      <div class="m-form_action">
        <app-button @click="onAuthenticate()"
                    full-width
                    label="Entrar"
                    type="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppInput from '@/components/form/AppInput'
import AppButton from '@/components/form/AppButton'

export default {
  name: 'FormLogin',
  components: { AppButton, AppInput },
  data: () => {
    return {
      form: {
        email: 'email@dasa.com.br',
        password: 'dasa'
      }
    }
  },
  methods: {
    ...mapActions('user', ['attemptLogin']),
    onAuthenticate () {
      this.attemptLogin({ ...this.form })
        .then((response) => {
          this.$router.push({ name: 'dashboard.index' })
        })
        .finally(() => console.log('error'))
    }
  }
}
</script>
