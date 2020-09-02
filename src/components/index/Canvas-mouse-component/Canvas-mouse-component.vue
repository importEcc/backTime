<!--
 * @Author: 王精华
 * @Date: 2020-08-31 14:00:06
 * @LastEditTime: 2020-08-31 15:06:40
 * @LastEditors: 王精华
 * @Description: canvas绘制鼠标轨迹
-->
<template>
  <div class="canvas-mouse">
    <canvas id="canvas"
            ref='canvas'
            @mousemove='move($event)'></canvas>
  </div>
</template>

<script>
export default {
  name: 'canvas',
  data () {
    return {
      ctx: '',
      para: {
        num: 100,
        color: false,    //  颜色  如果是false 则是随机渐变颜色
        radius: 0.9,          //   圆每次增加的半径 
        o: 0.09,         //      判断圆消失的条件，数值越大，消失的越快
      },
      color: '',
      circleColor: '',
      round_arr: []     // 存放圆的数组 
    }
  },
  mounted () {
    let ctx = this.ctx = this.$refs.canvas.getContext('2d')
    this.ctx.translate(0.5, 0.5)
    console.log(window.devicePixelRatio)
  },
  methods: {
    init (a, b) {
      if (this.para.color) {
        this.circleColor = para.color
      } else {
        this.color = Math.random() * 360
      }
      if (!this.para.color) {
        this.color += .1
        this.circleColor = 'hsl(' + this.color + ',100%,80%)'
      }
    },
    move (e) {

    }
  },
}
</script>
<style lang="scss" scoped>
@import './Canvas-mouse-component.scss';
</style>

