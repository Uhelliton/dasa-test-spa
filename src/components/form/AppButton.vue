<script>
export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  }
}
</script>

<template>
  <div>
    <button :class="{ 'm-button--fullWith': fullWidth }"
            v-bind="{ ...$attrs }"
            v-on="$listeners"
            class="m-button">
      {{ label }}
    </button>
  </div>
</template>
