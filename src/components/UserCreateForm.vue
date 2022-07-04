<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#users-create-offcanvas"
          aria-controls="#users-create-offcanvas">
    <i class="bi bi-person-plus-fill"></i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="users-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">New Members</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation" id="users-create-form" novalidate>
        <div class="mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" class="form-control" id="first-name" v-model="firstName" required>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" v-model="lastName" required>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Email</label>
          <input type="text" class="form-control" id="last-name" v-model="email" required>
        </div>
        <div class="mb-3">
          <label for="last-name" class="form-label">Password</label>
          <input type="text" class="form-control" id="last-name" v-model="password" required>
        </div>
        <div class="mb-3">
          <label for="gender" class="form-label">User Role</label>
          <select id="gender" class="form-select" v-model="userRole" required>
            <option value="" selected disabled>Choose...</option>
            <option value="MALE">User</option>
            <option value="FEMALE">Admin</option>
          </select>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click.prevent="createUser">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCreateForm',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userRole: ''
    }
  },
  methods: {
    createUser () {
      console.log(this.firstName)
      console.log(this.lastName)
      console.log(this.email)
      console.log(this.password)
      console.log(this.userRole)

      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/users'

      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json")

      const payload = JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))

    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
