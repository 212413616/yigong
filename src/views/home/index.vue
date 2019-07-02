<template>
    <div id="home-container">
        <div class="banner">
            <div class="poster"></div>
            <div class="theme">
                <h1>换个身份环游世界</h1>
                <p>每年有超过7000名义工伙伴与君行一起环游世界</p>
            </div>
        </div>
        <b-container class="destination-wrapper">
            <b-row>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                        <span class="name">中国杭州</span>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="6" lg="4" xl="4" >
                    <div class="item">
                        <b-img :src="require('../../assets/hangzhou.png')" fluid alt="杭州"></b-img>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    #home-container {
        .banner{
            position: relative;

            .poster {
                width: 100%;
                height: 440px;
                background: url("../../assets/destin.jpg") 50% no-repeat;
                background-size: cover;

                &::after {
                    content: "";
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, .4);
                }
            }

            .theme {
                width: 100%;
                text-align: center;
                position: absolute;
                bottom: 40px;
                color: white;

                h1 {
                    display: block;
                    font-size: 2em;
                    -webkit-margin-before: 0.67em;
                    -webkit-margin-after: 0.67em;
                    -webkit-margin-start: 0;
                    -webkit-margin-end: 0;
                    font-weight: bold;
                }
            }
        }

        .destination-wrapper{
            margin-top: 120px;

            &.container{
                max-width: 1200px;
            }

            .item{
                position: relative;
                height: 245px;
                margin-bottom: 30px;
                border-radius: 5px;
                overflow: hidden;

                img{
                    width: 100%;
                    height: 100%;
                    transition: all .2s linear;

                    &:hover{
                        transform: scale(1.05);
                    }
                }

                .name{
                    position: absolute;
                    left: 20px;
                    bottom: 10px;
                    font-size: 18px;
                    font-weight: 700;
                    color: #fff;
                }
            }
        }

    }
</style>
