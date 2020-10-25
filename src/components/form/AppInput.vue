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
  },
  computed: {
    inputListeners: function () {
      const vm = this
      // `Object.assign` mescla objetos para formar um novo objeto
      return Object.assign({},
        this.$listeners, {
          // Isso garante que o componente funcione com o v-model
          input: function (event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>

<template>
  <div class="m-input">
    <label class="m-input_label" :for="forId">
      {{ label }}
      <input  v-bind:value="value"
             outlined
             v-bind="{ ...$attrs }"
             v-on="inputListeners"
             @input="$emit('input', $event.target.value)"
             :name="forId" />
    </label>
  </div>
</template>
