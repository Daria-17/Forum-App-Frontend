<template>
  <h1>Members</h1>
  <div class="member-list" style="position: center">
    <div class="col" v-for="user in users" :key="user.id">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{ user.id }}</li>
        <li class="list-group-item">{{ user.nickname }}</li>
        <li class="list-group-item">{{ user.active ? 'Nutzer: aktiv': 'Nutzer: inaktiv' }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      users: [
        {
          id: 1,
          nickname: 'arifWider155',
          active: 'true'
        },
        {
          id: 2,
          nickname: 'Goofy1',
          active: 'false'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
