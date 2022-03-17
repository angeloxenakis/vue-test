<template>
    <div class="task-app">
          <TitleBar title="Task Tracker"/>
          <ToolBar :callback="doSomething"/>
          <TaskContainer :filterCompleted="this.filterCompleted"/> 
    </div>
</template>

<script>
import TitleBar from './TitleBar.vue'
import ToolBar from './ToolBar.vue'
import TaskContainer from './TaskContainer.vue'


export default { 
    name: 'TaskApp',
    components: {
    TitleBar,
    ToolBar,
    TaskContainer
    },
    data() {
        return {
            filterCompleted: false
        }
    }, 
    methods: {
        doSomething(value) {
            this.filterCompleted = value
            console.log(this.filterCompleted)
        }
    }
}
</script>

<style>
.task-app {
  margin: auto;
  width: 50%;
  border: 1px solid gray;
}
</style>