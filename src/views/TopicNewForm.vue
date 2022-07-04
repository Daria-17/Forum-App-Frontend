<template xmlns:th="http://www.w3.org/1999/xhtml">
  <h1>Create New Topic</h1>
  <div class="container">
    <div class="row" style="padding-top: 10%">
      <form class="col s12" name='f' th:action='@{/topic/new}' th:object="${newTopic}" method="POST">
      <div class="col s3">
        <input th:field="*{title}" id="title" name='title' type="text" class="validate" length="50" />
        <label for="title" th:text="#{title}"></label>
        <p  class="red-text"> Title</p>
        <textarea th:field="*{content}" id="content" name="content" class="materialize-textarea"/>
        <p for="content" class="p_for_textarea">Content</p>
        <div class="row"></div>

      <div class="col s6">

        </div>
        <div class="row">
          <div class="input-field col s12" >
            <input class="btn waves-effect waves-light" type="submit" name="action" value="Submit" />
          </div>
        </div>
      </div>
      </form>
  </div>
  </div>
  <footer th:replace="fragments/footer :: footer"></footer>
</template>

<script>
export default {
  name: 'TopicNewForm'
}
</script>

<style scoped>

</style>
