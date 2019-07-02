<template>
    <!--<transition name="fade-transform" mode="out-in">-->
        <router-view/>
    <!--</transition>-->
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped lang="scss">
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-10px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(10px);
    }

</style>
