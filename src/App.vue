<template>
    <div id="app">
        <Preloader></Preloader>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../src/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Preloader from '@/components/Preloader'

export default {
    name: 'App',
    //注册组件
    components: {
        Footer,
        Header,
        Preloader,
    },
}
</script>

<style lang="scss" scoped>
@import '../public/css/reset.css';
@import "./assets/css/style.css";
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/owl.carousel.min.css";
@import "./assets/css/magnific-popup.css";
@import "./assets/css/nice-select.css";
@import "./assets/css/animate.min.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/style.css";
@import "./assets/css/responsive.css";
</style>
