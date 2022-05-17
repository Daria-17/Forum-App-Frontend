<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="position: absolute;left: 0px;top: 0px">
    <HelloWorld msg="Hello World, Hello Forum-Members!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
