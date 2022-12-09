<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../src/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { Script } from "@/mixin"

export default {
	name      : "App",
	//注册组件
	components: {
		Footer,
		Header

	},
	mixins: [Script]
}
</script>

<style lang="scss" scoped>
@import 'assets/css/reset.css';
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
