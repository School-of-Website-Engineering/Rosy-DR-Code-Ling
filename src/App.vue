<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from '../src/components/Header/Header'

export default {
    name: 'App',
    //注册组件
    components: {
        Header,
    },
}
</script>

<style lang="scss" scoped>
</style>
