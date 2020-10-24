<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    forId: {
      type: String,
      required: true
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<template>
  <div class="m-input">
    <label class="m-input_label" :for="forId">
      {{ label }}
      <input v-bind:value="value"
             outlined
             v-bind="{ ...$attrs }"
             v-on="$listeners"
             v-bind:name="forId" />
    </label>
  </div>
</template>
