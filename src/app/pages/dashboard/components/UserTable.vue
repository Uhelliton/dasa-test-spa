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
    datatable: {
      filterKey: '',
      thead: [
        { field: 'id', label: 'ID', sortable: true },
        { field: 'login', label: 'Login', sortable: true },
        { field: 'node_id', label: 'Node ID', sortable: true },
        { field: 'type', label: 'Tipo' },
        { field: 'site_admin', label: 'Acesso' }
      ],
      rows: []
    },
    dataFiltered: []
  }),
  async mounted () {
    await this.fetchUsers()
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
    onListenRenderTable (data) {
      this.dataFiltered = data
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
    <app-table :thead="datatable.thead"
               :rows="datatable.rows"
               @renderData="onListenRenderTable"
               :filterKey="datatable.filterKey">
      <template #tbody>
        <tr v-for="(row, index) in dataFiltered" :key="index">
          <td scope="row" data-label="ID">{{ row.id }}</td>
          <td scope="row" data-label="Login">{{ row.login }}</td>
          <td scope="row" data-label="Node ID">{{ row.node_id }}</td>
          <td scope="row" data-label="Tipo">{{ row.type }}</td>
          <td scope="row" data-label="Acesso">
            <span class="m-badge"
                  :class="[{'m-badge--success': (index % 2 == 0)}, {'m-badge--warning': (index % 2 != 0)}]">
              {{ (row.site_admin) ? 'Administrador' : 'Administrador' }}
            </span>
          </td>
        </tr>
      </template>
    </app-table>
  </card-box>
</template>
