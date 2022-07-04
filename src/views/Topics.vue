<template xmlns:th="http://www.w3.org/1999/xhtml">
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
  <div class="row z-depth-1">
    <div class="row">
      <!-- L -->
      <div class="col s2  center">
        <div class="row">
          <div class="col s11 right">
            <a th:href="@{/user/} + ${topic.user.username}" th:text="'@' + ${topic.user.username}"></a>
          </div>
        </div>
        <div class="col s12"></div>
      </div>
      <!-- R -->
      <div class="col s10">
        <div class="row">
          <div class="col s11">
            <p th:text="${topic.creationDate} ? ${#calendars.format(topic.creationDate, 'HH:mm dd MMMM yyyy')}"></p>
            <p th:utext="${#strings.replace(topic.content,T(java.lang.System).getProperty('line.separator'),'&lt;br /&gt;')}"></p>
            <div class="divider"></div>
          </div>
        </div>
        <h6 th:text="${topic.user.footer}" class="blue-grey-text lighten-3-text"></h6>
      </div>
    </div>

    <div class="row" >
      <div class="col s10 right">
        <a class="btn-floating btn waves-effect waves-ligh green" th:href="@{/topic/delete/} + ${topic.id}">
          <i class="material-icons white black-text">delete</i>
        </a>
        <a class="btn-floating btn waves-effect waves-ligh green" th:href="@{/topic/edit/} + ${topic.id}">
          <i class="material-icons white black-text">mode_edit</i>
        </a>
      </div>
    </div>
  </div>
  <div class="row z-depth-1" th:each="post : ${posts}" th:id="${post.id}">
    <div class="col s2  center">
      <a th:href="@{/user/} + ${post.user.username}" th:text="'@' + ${post.user.username}"></a>
      <div class="col s12">
      </div>
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
