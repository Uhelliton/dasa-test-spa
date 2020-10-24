<script>
import LayoutBase from '../components/LayoutBase'
import FormLogin from '../components/FormLogin'

export default {
  name: 'AuthIndex',
  components: { LayoutBase, FormLogin },
  data: () => ({ })
}
</script>

<template>
  <layout-base>
    <template #contentMain>
      <form-login />
    </template>
  </layout-base>
</template>
