<template>
    <p class="area" :class="'area--' + area?.toLowerCase()">{{ area.toUpperCase() }}</p>
</template>

<script>
    export default {
        props: ['area']
    }
</script>

<style>
    .area {
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
    }
    .area--frontend {
        background-color: rgb(40, 17, 54)
    }
    .area--backend {
        background-color: rgb(107, 53, 140)
    }
    .area--career {
        background-color: rgb(182, 93, 237)
    }
</style>