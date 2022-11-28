<template>
    <div class="tiany">
        <div class="tiany-headr">
            <div class="headr-left">
                <a href=""><img src="../TML/images/banner.jpg" alt=""></a>
            </div>
            <div class="headr-right">
                <h2>欢迎来到天狱之境</h2>
                <div class="right-text">
                    <h5>这是一篇指南页面，能为你的游戏进程提供帮助！</h5>
                    <h6>天狱之境*开发总群：6666666</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
        .tiany{
            width: 1500px;
            margin: 0 auto;
            .tiany-headr{
                margin-top: 100px;
                display: flex;
                .headr-right{
                    width: 60%;
                    background: #29b9f5;
                    h2{
                        text-align: center;
                        padding: 45px;
                    }
                    .right-text{
                        width: 500px;
                        margin: 0 auto;
                        margin-top: 15px;
                        padding: 25px;
                        text-align: center;
                        border:  1px solid #7e3afb;
                        border-radius: 50px;
                        h5{
                            padding-bottom: 15px;
                        }
                    }
                }
            }
        }
</style>