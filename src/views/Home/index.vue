<template>
    <div>
        <Banner></Banner>
        <Content></Content>
        <Partner></Partner>
    </div>
</template>

<script>
import Banner from '@/views/Home/Banner'
import Content from '@/views/Home/Content'
import Partner from '@/views/Home/Partner'

export default {
    components: {
        Banner,
        Content,
        Partner,
    },
}
</script>

<style lang="scss" scoped>

</style>
