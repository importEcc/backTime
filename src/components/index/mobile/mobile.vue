<!--
 * @Author: 王精华
 * @Date: 2020-06-13 17:04:56
 * @LastEditTime: 2020-09-02 11:37:36
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
    <div class="mobiled"
         :class="{'long':size == 1}">
        <div class="mobile_tab">
            <tabs></tabs>
        </div>
    </div>
</template>
<script>
import tabs from './tabs/tabs'
export default {
    name: 'mobile',
    components: { tabs },
    data () {
        return {

        }
    },
    props: {
        phoneSize: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        size: function () {
            if (this.phoneSize == 0) {
                return 0
            } else if (this.phoneSize == 1) {
                return 1
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import './mobiled.scss';
</style>

