<template>
  <svg class="m-icon">
    <title v-if="title">{{ title }}</title>
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
