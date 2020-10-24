<script>
import CardBox from '@/components/layouts/CardBox'
import AppTable from '@/components/table/AppTable'
import service from '@/app/domains/users/services/user-service'
import { HTTP_RESPONSE } from '@/app/supports/utils/context'

export default {
  name: 'UserTable',
  components: { CardBox, AppTable },
  data: () => ({
    datatable: {
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
    }
  }
}
</script>

<template>
 <div>
   <card-box>
     <template #head>
       <div class="l-boxContent_head_title">Listagem de Usuários</div>
       <div class="l-boxContent_head_subtitle">apenas uma listagem simples de usuários via github</div>
     </template>
     <app-table :thead="datatable.thead">
       <template #tbody>
         <tr v-for="(row, index) in datatable.rows" :key="index">
           <td scope="row" :data-label="row.label">{{ row.id }}</td>
           <td scope="row" :data-label="row.label">{{ row.login }}</td>
           <td scope="row" :data-label="row.label">{{ row.html_url }}</td>
           <td scope="row" :data-label="row.label">{{ row.type }}</td>
           <td scope="row" :data-label="row.label">
             <button>Ok</button>
           </td>
         </tr>
       </template>
     </app-table>
   </card-box>
 </div>
</template>
