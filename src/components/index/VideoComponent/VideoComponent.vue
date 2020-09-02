<template>
    <div class="video-component">
        <video ref="video"
               class="v-video"
               @click="played()">
            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
                    type="video/mp4">
        </video>
        <div class="v-control"
             @mouseup="upblock()">
            <div ref='long'
                 class="v-control-long"
                 @mousedown="downblock($event)">
                <div ref="block"
                     :style="moveblock"
                     class="v-control-long-block"
                     @mouseup="outblock()"
                     @mousemove="moveblocks($event)">{{Number(jindu.toString().match(/^\d+(?:\.\d{0,2})?/))}}%</div>
                <div ref="longger"
                     class="v-control-long-ed"
                     :style="edlong">

                </div>
            </div>
            <div class="v-c-bottom">
                <div class="v-control-item">
                    <div class="item"
                         v-for="(item, index) in startorend"
                         :key="index"
                         @click="isplay(item.type,$event)">
                        {{item.name}}
                    </div>
                </div>
                <div class="v-control-time">
                    {{hh}}:{{mm}}:{{ss}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            startorend: [
                {
                    name: '开始',
                    type: 1,
                },
                {
                    name: '暂停',
                    type: 2
                }
            ],
            moveblock: {},
            edlong: {},
            jindu: "0%",
            isclick: false,
            currentTime: 0,
            ss: 0,
            mm: 0,
            hh: 0,
            isplayed: false,
            duration: '',
            long: ''
        }
    },
    mounted () {
        // console.log(this.$refs.video.duration,'视频长度')
        // console.log(this.$refs.video.readyState,'视频就绪状态')
        // console.log(this.$refs.video.volume,'视频音量')
        // console.log(this.$refs.video.muted,'视频是否关闭声音')
        // console.log(this.$refs.video.playbackRate,'视频播放速度')
        // console.log(this.$refs.video.paused,'视频的开始与结束')
        // console.log(this.$refs.video.networkState,'当前网路状态')
        // console.log(this.$refs.video.loop,'视频循环')
        // console.log(this.$refs.video.buffered,'视频的缓冲')
        // console.log(this.$refs.video.autoplay,'视频是否自动播放')
    },
    watch: {
        jindu: {
            handler () {

            }
        },
        isplayed: {
            handler () {
                let long = this.duration
                console.log(parseFloat(this.duration))
                let time = window.setInterval(() => {
                    this.jindu = `${parseFloat(this.jindu.split("%", 2)[0]) + parseFloat(100 / long)}%`
                    this.moveblock.left = `${parseFloat(this.jindu.split("%", 2)[0]) + parseFloat(100 / long)}%`
                    this.edlong.width = `${parseFloat(this.jindu.split("%", 2)[0]) + parseFloat(1000 / long)}%`
                    let top = parseFloat(this.jindu.split('%', 2)[0])
                    if (top >= 100 || !this.isplayed) {
                        clearInterval(time)
                    }
                }, 988);
            }
        }
    },
    methods: {
        played () {

        },
        timeout () {

        },
        //鼠标移动滑块
        moveblocks (event) {

        },
        //鼠标移出滑块
        outblock () {
            // this.isclick = false
        },
        //鼠标按下滑块
        downblock (event) {
            this.isclick = true
            if (this.isclick) {
                let W = event.offsetX
                let Vwidth = parseInt(this.$refs.video.duration)
                let width = this.$refs.long.offsetWidth
                let longer = ((W / Vwidth) * (Vwidth / width))
                this.long = longer
                this.moveblock = {
                    left: `${this.long * 100}%`
                }
                this.edlong = {
                    width: `${this.long * 100}%`
                }
                this.jindu = `${parseInt((longer) * 100)}%`
                this.$refs.video.currentTime = longer * Vwidth

            } else {

            }
        },
        //鼠标抬起滑块
        upblock () {
            this.isclick = false
        },
        isplay (a) {
            let status = this.$refs.video.readyState
            let min = ''
            let s = ''
            let h = ''
            if (status > 0) {
                this.currentTime = this.$refs.video.currentTime
                this.duration = this.$refs.video.duration
                let long = this.duration

                min = parseInt(long / 60)
                s = long % 60
                this.ss = parseInt(s)
                this.mm = min
            }
            if (a == 1) {
                this.isplayed = true
                this.$refs.video.play()
            } else {
                this.isplayed = false
                this.$refs.video.pause()
            }

        }
    },
}
</script>
<style lang="scss" scoped>
@import './VideoComponent.scss';
</style>
