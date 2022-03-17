<template>
    <div class="task-container">
        <TaskItem 
            v-for="taskItem in taskItems" 
            v-bind:key="taskItem.name" 
            :taskItem="taskItem">
        </TaskItem>
    </div>

</template>

<script>
import TaskItem from './TaskItem.vue'
import { getTasks } from '../services/TaskServices'

export default {
    name: "TaskContainer",
    components: {
        TaskItem,
    },
    props: {
        filterCompleted: Boolean
    },
    data() {
        return {
            taskItems: []
            
        }
    },
    methods: {
        renderTasks() {
            this.taskItems = getTasks("INCOMP")
        }
    },
    mounted() {
        this.renderTasks()
    }
}
</script>

<style scoped>
.task-container {
    border-top: 1px solid gray;
    padding: 8px;
    height: 300px;
    overflow: scroll;
}

</style>
