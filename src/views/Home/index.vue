<template>
    <div>
        <Banner></Banner>
        <Content></Content>
        <Partner></Partner>
        <Choose></Choose>
        <Featured></Featured>
        <Unique></Unique>
    </div>
</template>

<script>
import Banner from '@/views/Home/Banner'
import Content from '@/views/Home/Content'
import Partner from '@/views/Home/Partner'
import Choose from '@/views/Home/Choose'
import Featured from '@/views/Home/Featured'
import Unique from '@/views/Home/Unique'

export default {
    components: {
        Banner,
        Content,
        Partner,
        Choose,
        Featured,
        Unique,
    },
}
</script>

<style lang="scss" scoped>

</style>
