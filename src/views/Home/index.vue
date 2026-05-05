<template>
    <div>
        <Banner></Banner>
        <Choose></Choose>
        <Partner></Partner>
        <BlogTwo></BlogTwo>
    </div>
</template>

<script>
import Banner from "@/views/Home/Banner/index.vue"
import Partner from "@/views/Home/Partner/index.vue"
import Choose from "@/views/Home/Choose/index.vue"
import BlogTwo from "@/views/Home/BlogTwo/index.vue"
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
