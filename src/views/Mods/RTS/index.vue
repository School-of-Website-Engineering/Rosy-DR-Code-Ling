<template>
    <div>
        <div class="why-choose">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div class="section-head">
                            <h2 class="title" style="padding:0,10px">&nbsp;</h2>
                            <h4 class="title" style="padding:0,10px">
                                星河征途-为了共同的目标而前进着！<br>
                                <img src="./image/re.jpg" id="recore" /> 
                                <span id="recore-text">RE-CORE MOD STUIDO</span>
                            </h4>
                            <p>
                                <span>星河尘埃-无际征途 以下简称为星河征途</span>
                                <span>是一款基于Rusted Warfare开发的战略性Mod</span>
                                <span>拥有四大阵营，和丰富的剧情冒险的额外扩展内容</span>
                                <span>制作组为Re-Core Mod Stuido,JDSALing为总队长</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fourteam">
                    <div class="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.3s">
                    <h2 class="title" style="padding:0,10px">星河征途--四大阵营</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-md-6 wow fadeInUp text-center" data-wow-delay="0.2s">
                        <div class="chose-box">
                            <div class="thumb">
                                <img src="./image/OldDay.png" alt="" />
                            </div>
                            <h5 class="chose-head">旧日神教</h5>
                            <p class="text">
                                <span>旧日神教是基于原版的铁锈阵营强化的阵营，拥有先进的科技和单位。</span>
                                <span>代表单位：拉莱耶，Overload，毒蝎，终末核弹发射井</span>
                                <span>旧日神教:旧时代的风暴终究会磨平时间的棱角……</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 wow fadeInUp text-center" data-wow-delay="0.3s">
                        <div class="chose-box">
                            <div class="thumb">
                                <img src="./image/DemonJi.png" alt="" />
                            </div>
                            <h5 class="chose-head">妖姬风暴</h5>
                            <p class="text">
                                <span>妖姬风暴是星河的代表的独立原创阵营，拥有强大的神蝶和一系列超级单位。</span>
                                <span>代表单位：神蝶母舰，AlphaX，，终末核弹发射井</span>
                                <span>妖姬风暴:新旧交替的年代，妖姬永不屈服在敌人的支配下！</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 wow fadeInUp text-center" data-wow-delay="0.4s">
                        <div class="chose-box">
                            <div class="thumb">
                                <img src="./image/MagicDragon.png" alt="" />
                            </div>
                            <h5 class="chose-head">魔龙古国</h5>
                            <p class="text">
                                <span>魔龙古国是由原【果の铁锈】进行的联动阵营，在星河中也属于各个阵营的重大线索嵌入。</span>
                                <span>代表单位：尼德霍格，慈祥圣母-拉啦，小果果</span>
                                <span>魔龙古国:机关算尽，然最终受益的仍然是幕后的主谋&nbsp;&nbsp;</span>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6 wow fadeInUp text-center" data-wow-delay="0.5s">
                        <div class="chose-box">
                            <div class="thumb">
                                <img src="./image/IntellBug.png" alt="" />
                            </div>
                            <h5 class="chose-head">智虫帝国</h5>
                            <p class="text">
                                <span>智虫帝国是即将要加入的第四阵营，同时也是星河的高级纳米阵营</span>
                                <span>代表单位：纳米堡垒，智虫核心，纳米光塔</span>
                                <span>智虫帝国：诞生便是为了救赎，救赎便是为了赎罪……&nbsp;&nbsp;</span>                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [
        { backgroundColor: '#3f51b5', width: '100%', height: '100%' },
        { backgroundColor: '#eee', width: '100%', height: '100%' },
        { backgroundColor: '#f44336', width: '100%', height: '100%' },
      ],
    }
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>