<template>
    <div class="videos">
        <video-component></video-component>
    </div>
</template>
<script>
import VideoComponent from "../../components/index/VideoComponent/VideoComponent"
export default {
    name:'tabel',
    components:{VideoComponent},
    data() {
        return {
        }
    },
    mounted() {
    },
    props:{
    }
}
</script>
<style lang="scss">
@import "./videos.scss"
</style>

