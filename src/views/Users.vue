<template>
  <h1>Members</h1>
  <div class="member-list" >
    <user-create-form></user-create-form>
    <div class="col" v-for="user in users" :key="user.id">

      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{ user.id }}</li>
        <li class="list-group-item">{{ user.firstName }}</li>
        <li class="list-group-item">{{ user.lastName }}</li>
        <li class="list-group-item">{{ user.email }}</li>
        <li class="list-group-item">{{ user.userRole }}</li>
        <li class="list-group-item">{{ user.locked ? 'Nutzer: locked' : 'Nutzer: unlocked' }}</li>
        <li class="list-group-item">{{ user.enabled ? 'Nutzer: aktiv' : 'Nutzer: inaktiv' }}</li>
      </ul>
    </div>
  </div>

</template>

<script>
import UserCreateForm from '@/components/UserCreateForm'
export default {
  name: 'Users',
  components: {
    UserCreateForm
  },
  data () {
    return {
      users: [
      ]
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
