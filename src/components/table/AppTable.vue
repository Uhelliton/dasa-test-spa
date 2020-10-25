<script>
export default {
  name: 'AppTable',
  data: () => ({
    pagination: {
      rowsPerPage: 10,
      pageNumber: 1
    }
  }),
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
    },
    filterKey: {
      type: String,
      required: false
    }
  },
  computed: {
    pageNumber () {
      return this.pagination.pageNumber
    },
    filtered () {
      let filterKey = this.filterKey && this.filterKey.toLowerCase()
      let filtered = this.rows
      if (filterKey) {
        filtered = filtered.filter((row) => {
          return Object.keys(row).some((key) => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      return filtered
    },
    paginatedData () {
      const { pageNumber, rowsPerPage } = this.pagination
      const start = pageNumber * pageNumber
      const end = start + rowsPerPage

      if (this.filtered.length <= rowsPerPage) {
        return this.filtered
      }

      return this.filtered.slice(start, end)
    }
  },

  watch: {
    paginatedData (data) {
      this.$emit('renderData', data)
    }
  },
  methods: {
    goToPage (page) {
      this.pagination.pageNumber = page
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
    <ul class="m-pagination"  data-pagination="pagination">
      <li :key="index"
          class="m-pagination_item"
          :class="{'m-pagination_item--active': pageNumber === pagination}"
          @click="goToPage(pagination)"
          v-for="(pagination, index) in rows.length / pagination.rowsPerPage">
        {{ pagination}}
      </li>
    </ul>
  </div>
</template>
