<template>
    <div>
        <Banner></Banner>
        <Choose></Choose>
        <Partner></Partner>
        <BlogTwo></BlogTwo>
    </div>
</template>

<script>
import Banner from "@/views/Home/Banner"
import Partner from "@/views/Home/Partner"
import Choose from "@/views/Home/Choose"
import BlogTwo from "@/views/Home/BlogTwo"
import { Script } from "@/mixin"

export default {
	components: {
		Banner,
		Partner,
		Choose,
		BlogTwo
	},
	mixins: [Script]
}
</script>

<style lang="scss" scoped>

</style>
