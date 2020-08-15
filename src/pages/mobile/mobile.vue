<template>
    <div class="mobile">
        <mobiled></mobiled>
    </div>
</template>
<script>
import Mobiled from '../../components/index/mobile/mobile'
export default {
    name:'mobile',
    components:{Mobiled},
    data() {
        return {
        }
    },
}
</script>
<style lang="scss" scoped>
@import "./mobile.scss"
</style>
