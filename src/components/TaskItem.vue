<template>
    <div class="task-item">
        <h3>{{taskItem.name}}</h3>
        <h4>{{taskItem.priority}}</h4>
        <h4>{{taskItem.status}}</h4>
    </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: {
        taskItem: {}
    },
    render: function (createElement) {
        return createElement('h1', "Yoooo")
    },
    mounted() {
        console.log(this.taskItem.name)
    }
}
</script>

<style scoped>
.task-item {
    padding: 8px;
    margin: 9px;
    border: 1px solid gray;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
}
</style>
