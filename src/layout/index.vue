<template>
    <b-container id="layout-container" fluid>
        <b-row class="header-row">
            <b-col>
                <b-header/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <app-main/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {Header, AppMain} from './components/index'

    export default {
        name: "index",
        components: {
            BHeader: Header,
            AppMain
        }
    }
</script>

<style scoped lang="scss">
    #layout-container {
        padding: 0;

        .col{
            padding: 0;
        }

        .row{
            margin: 0;
        }

        .header-row{
            width: 100%;
            position: absolute;
            top: 0;
            z-index: 2;
        }
    }
</style>
