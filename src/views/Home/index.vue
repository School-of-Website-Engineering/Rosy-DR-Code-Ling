<template>
    <div>
        <Banner></Banner>
        <!-- <Partner></Partner> -->
        <Choose></Choose>
        <Featured></Featured>
        <Unique></Unique>
        <Plan></Plan>
        <Testomonial></Testomonial>
        <BlogTwo></BlogTwo>
    </div>
</template>

<script>
import Banner from '@/views/Home/Banner'
import Partner from '@/views/Home/Partner'
import Choose from '@/views/Home/Choose'
import Featured from '@/views/Home/Featured'
import Unique from '@/views/Home/Unique'
import Plan from '@/views/Home/Plan'
import Testomonial from '@/views/Home/Testomonial'
import BlogTwo from '@/views/Home/BlogTwo'
export default {
    components: {
        Banner,
        Partner,
        Choose,
        Featured,
        Unique,
        Plan,
        BlogTwo,
        Testomonial,
    },
}
</script>

<style lang="scss" scoped>

</style>
