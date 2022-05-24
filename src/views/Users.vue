<template>
  <h1>Members</h1>
  <div class="member-list" >
    <div class="col" v-for="user in users" :key="user.id">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{ user.id }}</li>
        <li class="list-group-item">{{ user.nickname }}</li>
        <li class="list-group-item">{{ user.active ? 'Nutzer: aktiv' : 'Nutzer: inaktiv' }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(user => {
        this.users.push(user)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
