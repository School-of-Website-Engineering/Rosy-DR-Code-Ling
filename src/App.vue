<template>
  <div id="app">
    <Header></Header>
     <router-view></router-view>
  </div>
</template>

<script>
import Header from '../src/components/Header/Header'
  export default {
    name: "App",
  //注册组件
  components: {
    Header
  }
  }
</script>

<style lang="scss" scoped>
  /*引入css文件*/
  @import "../modes/ReCoreStarRiver-main/assets/css/animate.min.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/bootstrap.min.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/css2.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/envato-preview.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/font-awesome.min.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/magnific-popup.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/nice-select.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/owl.carousel.min.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/responsive.css";
  @import "../modes/ReCoreStarRiver-main/assets/css/style.css";
</style>
