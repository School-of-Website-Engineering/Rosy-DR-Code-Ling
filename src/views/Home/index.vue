<template>
    <div>
        <Banner></Banner>
        <!-- <Partner></Partner> -->
        <Choose></Choose>
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
import Unique from '@/views/Home/Unique'
import Plan from '@/views/Home/Plan'
import Testomonial from '@/views/Home/Testomonial'
import BlogTwo from '@/views/Home/BlogTwo'
export default {
    components: {
        Banner,
        Partner,
        Choose,
        Unique,
        Plan,
        BlogTwo,
        Testomonial,
    },
}
</script>

<style lang="scss" scoped>

</style>
