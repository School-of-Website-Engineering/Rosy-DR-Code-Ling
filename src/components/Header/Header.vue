<template>
    <div id="app">
        <header class="header-two sticky-header">
            <div class="header-navigation"
            style="background: -webkit-gradient(linear, left top, right top, from(#7e3afb), to(#29b9f5));">
                <div class="container-fluid d-flex align-items-center justify-content-between container-1470">
                    <!-- 网页Logo部分 -->
                    <div class="header-left">
                        <div class="site-logo">
                            <router-link to="/home"><img src="./images/Logo.png" alt="Logo"></router-link>
                        </div>
                    </div>
                    <!-- 网页主体部分 -->
                    <div class="header-right d-flex align-items-center justify-content-end">
                        <div class="site-nav-menu">
                            <ul class="primary-menu">
                                <li class="current">
                                    <router-link class="drop" to="/home">网站主页</router-link>
                                </li>
                                <li>
                                    <a class="drop">模组列表</a>
                                    <ul class="submenu">
                                        <li><router-link to="pxd">魔绫地牢-PXD</router-link></li>
                                        <li><router-link to="rts">星河征途-RTS</router-link></li>
                                        <li><router-link to="tml">天狱之境-TML</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="drop" >开发团队(Dev)</a>
                                    <ul class="submenu">
                                        <li><router-link to="/re">Re-重置核心工作室</router-link></li>
                                        <li><router-link to="/mlpd">MLPD联合制作工作室</router-link></li>
                                        <li><router-link to="/skyhell">SkyHell--开发总部</router-link></li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link class="drop" to="abt">关于我们(Abt)</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="thanks">网页致谢(Thanks)</router-link>
                                </li>
                            </ul>
                            <a class="nav-close" href="#0"><i class="fal fa-times"></i></a>
                        </div>
                        <!-- BootSharp框架 -->
                        <div class="header-extra d-flex align-items-center">
                            <div class="offcanvas-widget d-none">
                                <div class="offcanvas-icon">
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div class="nav-toggler">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang="css" scoped>
</style>
