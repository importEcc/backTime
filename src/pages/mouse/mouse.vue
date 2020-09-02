<!--
 * @Author: 王精华
 * @Date: 2020-08-26 15:53:10
 * @LastEditTime: 2020-09-01 13:50:25
 * @LastEditors: 王精华
 * @Description: 鼠标模块
-->
<template>
  <div class="mouse">

  </div>
</template>
<script>
import CanvasMouseComponent from '../../components/index/Canvas-mouse-component/Canvas-mouse-component'
export default {
  name: 'mouse',
  components: { CanvasMouseComponent },
  data () {
    return {
      isshow: false,
      souleStyle: {},
      yidong: false,
      level: '',

    }
  },
  created () {

  },
  render (createElement) {
    return createElement('h' + this.level, this.$slots.default);
  },
  mounted () {

  },
  computed: {

  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
canvas {
  width: 200px;
  height: 200px;
}
@import './mouse.scss';
</style>

