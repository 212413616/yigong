<template>
    <div id="header-container">
        <img class="logo" src="../../assets/logo-white.png"/>
        <div class="menu-bar">
            <b-nav pills>
                <b-nav-item to="/home">目的地</b-nav-item>
                <b-nav-item to="/activity">活动报名</b-nav-item>
                <b-nav-item>旅行故事</b-nav-item>
                <b-nav-item>关于我们</b-nav-item>
            </b-nav>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    #header-container {
        width: 80%;
        height: 80px;
        line-height: 80px;
        margin: 0 auto;

        .logo {
            width: 100px;
            height: auto;
        }

        .menu-bar {
            line-height: 20px;
            display: inline-block;
        }
    }
</style>
