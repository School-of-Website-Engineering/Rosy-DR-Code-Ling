<template>
    <div>
        <Banner></Banner>
        <div>content</div>
    </div>
</template>

<script>
import Banner from '@/views/Home/Banner'

export default {
    components:{
        Banner
    }
}
</script>

<style lang="scss" scoped>
div {
    text-align: center;
    width: 100%;
    height: 500px;
    line-height: 500px;
    color: white;
    background-color: rgb(158, 158, 158);
}
</style>
