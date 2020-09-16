<!--
 * @Author: 王精华
 * @Date: 2020-09-02 11:02:00
 * @LastEditTime: 2020-09-03 16:17:34
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
  <div class="tab-component">
    <div class="tabs-title">tab组件</div>
    <div class="tabs">
      <div class="tab-item"
           :class="{'tabs-item-config':ischange,'tabs-item-change':selectIndex==index}"
           v-for="(item, index) in 2"
           :key="index"
           @click="selectItem(index)">
        <!-- <i v-show="index==selectIndex"
           class="iconfont icon-arrow_drop_up_24px"></i> -->
        <i class="iconfont"
           :class="{'icon-arrow_drop_down_24px':selectIndex !== index,'icon-arrow_drop_up_24px':index === selectIndex}"></i>
        标签{{index+1}}
      </div>
    </div>
    <div class="item-info"
         v-for="(item, index) in 2"
         :key="index">
      <div class="item-info-item"
           v-show="selectIndex == index">
        标签{{index+1}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tabs',
  data () {
    return {
      selectIndex: 0,
      ischange: false
    }
  },
  methods: {
    selectItem (ind) {
      this.selectIndex = ind
    }
  },
}
</script>
<style lang="scss" scoped>
@import './tabs.scss';
</style>

