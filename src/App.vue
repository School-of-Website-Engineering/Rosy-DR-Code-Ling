<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../src/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default {
    name: 'App',
    //注册组件
    components: {
        Footer,
        Header,
    },
    mounted () {
        const s = document.createElement('script')
        s.type = 'text/javascript'
        s.src = 'https://jdsalingzx.top/assets/jsx/jquery-3.6.0.min.js'
        document.body.appendChild(s)

        const a = document.createElement('script')
        a.type = 'text/javascript'
        a.src = 'https://jdsalingzx.top/assets/jsx/bootstrap.bundle.min.js'
        document.body.appendChild(a)

        const b = document.createElement('script')
        b.type = 'text/javascript'
        b.src = 'https://jdsalingzx.top/assets/jsx/owl.carousel.min.js'
        document.body.appendChild(b)

        const c = document.createElement('script')
        c.type = 'text/javascript'
        c.src = 'https://jdsalingzx.top/assets/jsx/jquery.nice-select.min.js'
        document.body.appendChild(c)

        const d = document.createElement('script')
        d.type = 'text/javascript'
        d.src = 'https://jdsalingzx.top/assets/jsx/jquery.magnific-popup.min.js'
        document.body.appendChild(d)

        const e = document.createElement('script')
        e.type = 'text/javascript'
        e.src = 'https://jdsalingzx.top/assets/jsx/wow.min.js'
        document.body.appendChild(e)
        const j = document.createElement('script')
        j.type = 'text/javascript'
        j.src = 'https://masonosam.top/assets/js/envato-preview.js'
        document.body.appendChild(j)

        const h = document.createElement('script')
        h.type = 'text/javascript'
        h.src = 'https://masonosam.top/assets/js/mixitup.min.js'
        document.body.appendChild(h)

        const x = document.createElement('script')
        x.type = 'text/javascript'
        x.src = 'https://jdsalingzx.top/assets/jsx/main.js'
        document.body.appendChild(x)
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

//星河征途样式
@import "./assets/css/galaxy.css";
</style>
