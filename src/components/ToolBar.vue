<template>
    <div class="tools">
        <div class="tool-btns">
            <h4>Show Completed</h4>
            <input type="checkbox" @change="onChange($event)"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ToolBar',
        props: {
            callback: { type: Function }
        },
        methods: {
            onChange:function(event){
                this.callback(event.target.checked)
            }
        },
    }

</script>

<style scoped>
    .tool-btns {
        padding: 16px;
    }

    h4 {
        margin: 0px;
    }

    .tool-btns {
        display: flex;
    }
</style>