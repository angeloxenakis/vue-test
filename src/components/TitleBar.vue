<template>
    <div class="title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'TitleBar',
        props: {
            title: String
        }
    }

</script>

<style scoped>
    .title {
        border: 1px solid gray;
        margin: 8px;
    }
</style>