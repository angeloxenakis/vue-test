<template>
  <div id="app">
    <TaskApp />
  </div>
</template>

<script>
import TaskApp from './components/TaskApp.vue'

export default { 
  name: 'App',
  components: {
    TaskApp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
