<script>
export default {
  name: 'Table',
  data: () => ({}),
  props: {
    thead: {
      type: [Array, Object],
      required: true,
      default: () => []
    },
    rows: {
      type: [Array, Object],
      required: false,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="m-table">
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
  </div>
</template>
