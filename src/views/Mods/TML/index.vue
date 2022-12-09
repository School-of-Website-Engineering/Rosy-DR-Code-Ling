<template>
    <div>
        <Bane></Bane>
        <Cont></Cont>
    </div>
</template>
<script>
import Bane from "../TML/Bane/index.vue"
import Cont from "../TML/Cont/index.vue"
import { Script } from "@/mixin"

export default {
	components: {
		Bane,
		Cont
	}

}
</script>

<style lang="scss" scoped>

</style>
