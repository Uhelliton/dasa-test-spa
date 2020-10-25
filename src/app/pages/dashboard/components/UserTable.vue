<script>
import CardBox from '@/components/layouts/CardBox'
import AppTable from '@/components/table/AppTable'
import AppInput from '@/components/form/AppInput'
import service from '@/app/domains/users/services/user-service'
import { HTTP_RESPONSE } from '@/app/supports/utils/context'

export default {
  name: 'UserTable',
  components: { CardBox, AppTable, AppInput },
  data: () => ({
    pagination: {
      rowsPerPage: 10,
      pageNumber: 1
    },
    datatable: {
      filterKey: '',
      thead: [
        { field: 'id', label: 'ID', sortable: true },
        { field: 'login', label: 'Login', sortable: true },
        { field: 'html_url', label: 'Url', sortable: true },
        { field: 'type', label: 'Tipo' },
        { field: 'actions', label: '' }
      ],
      rows: []
    }
  }),
  async mounted () {
    await this.fetchUsers()
  },
  computed: {
    pageNumber () {
      return this.pagination.pageNumber
    },
    filtered () {
      let filterKey = this.datatable.filterKey && this.datatable.filterKey.toLowerCase()
      let heroes = this.datatable.rows
      if (filterKey) {
        heroes = heroes.filter((row) => {
          return Object.keys(row).some((key) => {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(filterKey) > -1
            )
          })
        })
      }
      return heroes
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
  methods: {
    async fetchUsers () {
      try {
        const request = await service.search()
        const { data, status } = request
        if (status === HTTP_RESPONSE.OK) {
          this.datatable.rows = data
        }
      } catch (e) {
        console.log(e)
      }
    },
    goToPage (page) {
      this.pagination.pageNumber = page
    }
  }
}
</script>

<template>
  <card-box>
    <template #head>
      <div class="l-boxContent_head_title">Listagem de Usuários</div>
      <div class="l-boxContent_head_subtitle">apenas uma listagem simples de usuários via github</div>
    </template>
    <div class="row col-6">
      <div class="">
        <app-input v-model="datatable.filterKey"
                   forId="filterKey"
                   placeholder="digite algo"
                   label="Buscar" />
      </div>
    </div>
    <app-table :thead="datatable.thead">
      <template #tbody>
        <tr v-for="(row, index) in paginatedData" :key="index">
          <td scope="row" :data-label="row.label">{{ row.id }}</td>
          <td scope="row" :data-label="row.label">{{ row.login }}</td>
          <td scope="row" :data-label="row.label">{{ row.html_url }}</td>
          <td scope="row" :data-label="row.label">{{ row.type }}</td>
          <td scope="row" :data-label="row.label">
            suycesso
          </td>
        </tr>
      </template>
    </app-table>
    <div>
      <ul class="m-pagination">
        <li :key="index"
            class="m-pagination_item"
            :class="{'m-pagination_item--active': pageNumber === pagination}"
            @click="goToPage(pagination)"
            v-for="(pagination, index) in datatable.rows.length / pagination.rowsPerPage">
            {{ pagination}}
        </li>
      </ul>
    </div>
  </card-box>
</template>
