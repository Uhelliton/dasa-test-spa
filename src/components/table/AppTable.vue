<script>
export default {
  name: 'Table',
  props: {
    thead: {
      type: [Array, Object],
      required: true,
      default: () => []
    },
    filterKey: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <table>
    <thead>
    <tr>
      <th scope="col"
          v-for="(column, index) in thead"
          :key="index">
          {{ column.label }}
      </th>
    </tr>
    </thead>
    <tbody>
    <slot name="tbody"></slot>
    </tbody>
  </table>
</template>
