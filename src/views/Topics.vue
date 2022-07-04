<template>
<h1>Topics</h1>
  <div class="topic-list">
    <div class="col" v-for="topic in topics" :key="topic.id">
      <ul class="list-group list-group-horizontal">
        <li class="list-group-item">{{ topic.id }}</li>
        <li class="list-group-item">{{ topic.title }}</li>
        <li class="list-group-item">{{ topic.active ? 'Topic: aktiv' : 'Topic: inaktiv' }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topics',
  data () {
    return {
      topics: []
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/topics'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(topic => {
        this.topics.push(topic)
      }))
      .catch(error => console.log('error', error))
  }
}

</script>

<style scoped>

</style>
