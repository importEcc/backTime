<!--
 * @Author: 王精华
 * @Date: 2020-06-02 15:57:44
 * @LastEditTime: 2020-09-02 11:53:29
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
    <div class="mobile">
        <mobiled :phoneSize="phoneSize"></mobiled>
        <div class="selectSize"
             @click="changeSize()">
            <div class="phone-size">
                大
            </div>
        </div>
        <div class="selectSize"
             @click="changeSizeS()">
            <div class="phone-size">
                小
            </div>
        </div>
    </div>
</template>
<script>
import Mobiled from '../../components/index/mobile/mobile'
export default {
    name: 'mobile',
    components: { Mobiled },
    data () {
        return {
            phoneSize: 0
        }
    },
    methods: {
        changeSize () {
            this.phoneSize = 1
        },
        changeSizeS () {
            this.phoneSize = 0
        }
    },
}
</script>
<style lang="scss" scoped>
@import './mobile.scss';
</style>
