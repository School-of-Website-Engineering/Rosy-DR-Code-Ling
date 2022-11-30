<template>
    <footer class="footer-area two">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="footer-box one">
                        <div class="logo">
                            <img src="../Footer/image/Logo.png" alt="Markpro" />
                        </div>
                        <p class="text">
                            本网站由CodeLing团队成员搭建完成。
                        </p>

                        <div class="social">
                            <a href="#0"><i class="fas fa-star" style="color:yellow ;"></i></a>
                            <a href="#0"><i class="fas fa-star" style="color:yellow ;"></i></a>
                            <a href="#0"><i class="fas fa-star" style="color:yellow ;"></i></a>
                            <a href="#0"><i class="fas fa-star" style="color:yellow ;"></i></a>
                            <a href="#0"><i class="fas fa-star" style="color:yellow ;"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="footer-box two">
                        <h4 class="lasthead">网站结构</h4>
                        <div class="footer-list">
                            <ul>
                                <li><a href="#0"> 模组列表 </a></li>
                                <li><a href="#0"> 开发团队 </a></li>
                                <li><a href="#0"> 关于我们 </a></li>
                                <li><a href="#0"> 网页致谢 </a></li>
                                <li><a href="#0"> 加入团队 </a></li>
                                <li><a href="#0"> 联系我们 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div class="footer-box three">
                        <h4 class="lasthead">模组介绍</h4>
                        <div class="footer-list">
                            <ul>
                                <li>
                                    <router-link class="drop" to="rts">星河征途</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="pxd">魔绫地牢</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="tml">天狱之境</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="rts">星河征途-RTS</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="pxd">魔绫地牢-PXD</router-link>
                                </li>
                                <li>
                                    <router-link class="drop" to="tml">天狱之境-TML</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="footer-box none">
                        <h4 class="lasthead">团队介绍</h4>
                        <div class="footer-list">
                            <ul>
                                <li><a href="#0"> 星河团队 </a></li>
                                <li><a href="#0"> 魔凌团队 </a></li>
                                <li><a href="#0"> 天狱团队 </a></li>
                                <li><a href="https://jq.qq.com/?_wv=1027&k=A7ze2Tgk" target="_blank"> Codeling团队 </a>
                                </li>
                                <li><a href="https://github.com/School-of-Website-Engineering/Rosy-DR-Code-Ling"
                                       target="_blank"> 网站项目分享 </a></li>
                                <li><a href="#0"> 工作室 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

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

<style lang="scss" scoped></style>
