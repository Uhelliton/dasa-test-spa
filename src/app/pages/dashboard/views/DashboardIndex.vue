<script>
import CardBox from '@/components/layouts/CardBox'
import UserTable from '../components/UserTable'

export default {
  name: 'DashboardIndex',
  components: { CardBox, UserTable },
  data: () => ({})
}
</script>

<template>
 <div>
   <card-box>
     <template #head>
       <div class="l-boxContent_head_title">Listagem de Usuários</div>
       <div class="l-boxContent_head_subtitle">apenas uma listagem simples de usuários via github</div>
     </template>
     <user-table></user-table>
   </card-box>
 </div>
</template>
