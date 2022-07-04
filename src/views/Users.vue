<template>
  <h1>Members</h1>
  <div class="member-list" >
    <user-create-form></user-create-form>
    <div class="col" v-for="user in users" :key="user.id">

      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{ user.id }}</li>
        <li class="list-group-item">{{ user.firstname }}</li>
        <li class="list-group-item">{{ user.lastname }}</li>
        <li class="list-group-item">{{ user.dob }}</li>
        <li class="list-group-item">{{ user.username }}</li>
        <li class="list-group-item">{{ user.email }}</li>
        <li class="list-group-item">{{ user.password }}</li>
        <li class="list-group-item">{{ user.userRole }}</li>
        <li class="list-group-item">{{ user.creationDate }}</li>
        <li class="list-group-item">{{ user.active ? 'Nutzer: aktiv' : 'Nutzer: inaktiv' }}</li>
        <li class="list-group-item">{{ user.locked ? 'Nutzer: locked' : 'Nutzer: unlocked' }}</li>
        <li class="list-group-item">{{ user.enabled ? 'Nutzer: enabled' : 'Nutzer: unenabled' }}</li>

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
        {
          id: 1,
          firstname: 'Maya',
          lastname: 'Meier',
          dob: 2001 - 12 - 6,
          username: 'ingo',
          email: 'stnh2@gmail.com',
          password: '1256495we',
          userRole: 'user',
          creationDate: 2022 - 15 - 9,
          active: true,
          locked: true,
          enabled: true
        },
        {
          id: 2,
          firstname: 'Lina',
          lastname: 'Miren',
          dob: 1986 - 10 - 25,
          username: 'lina287',
          email: 'miren25@gmail.com',
          password: '1248rt156.',
          userRole: 'user',
          creationDate: 2022 - 7 - 7,
          active: true,
          locked: true,
          enabled: true

        }
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
