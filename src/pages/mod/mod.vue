<!--
 * @Author: 王精华
 * @Date: 2020-09-10 13:37:40
 * @LastEditTime: 2020-09-10 13:42:39
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
  <div class="mod">
    <mod-component></mod-component>
  </div>
</template>
<script>
import ModComponent from '../../components/ModComponent/ModComponent'
export default {
  name: 'mod',
  components: { ModComponent }
}
</script>
<style lang="scss" scoped>
@import './mod.scss';
</style>
