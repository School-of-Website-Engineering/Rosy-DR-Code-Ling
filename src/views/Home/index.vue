<template>
    <div>
        <Banner></Banner>
        <Content></Content>
        <Partner></Partner>
        <Choose></Choose>
        <Featured></Featured>
    </div>
</template>

<script>
import Banner from '@/views/Home/Banner'
import Content from '@/views/Home/Content'
import Partner from '@/views/Home/Partner'
import Choose from '@/views/Home/Choose'
import Featured from '@/views/Home/Featured'

export default {
    components:{
        Banner,
        Content,
        Partner,
        Choose,
        Featured,
    }
}
</script>

<style lang="scss" scoped>

</style>
