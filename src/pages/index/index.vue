<template>
    <div class="index_mine">
        <div class="index"
             :style="{width:row+'px',height:col+'px'}">
            <div class="index_top">
                <div class='card_'
                     v-for="(item, index) in cardlist"
                     :key="index"
                     @click="goTabel(item)">
                    <div class="card_list">
                        <p class="card_list_text">{{item.card_CN_name}}</p>
                        <p class="card_list_text wenzi">{{item.card_EN_name}}</p>
                    </div>
                </div>
            </div>
            <div class="index_title">
                Welcome to my house
            </div>
        </div>
        <div class="index_huakuai"
             :style="{top:(col-100)+'px'}">
            <div class="index_next"
                 @click="next()">

            </div>
        </div>
        <div class="index_sec"
             :style="actives">

        </div>
    </div>
</template>
<script>
export default {
    name: 'index',
    data () {
        return {
            cardlist: [
                {
                    id: 1,
                    card_CN_name: '视频',
                    card_EN_name: 'Video',
                    path: 'videos'
                },
                {
                    id: 2,
                    card_CN_name: '移动端',
                    card_EN_name: 'Mobile',
                    path: 'mobile'
                },
                {
                    id: 3,
                    card_CN_name: '组件',
                    card_EN_name: 'Component',
                    path: 'mobile'
                },
            ],
            actives: {}
        }
    },
    created () {
        this.actives = {
            height: this.col + 'px',
            top: this.col + 'px'
        }
    },
    computed: {
        row: function () {
            return localStorage.getItem('row')
        },
        col: function () {
            return localStorage.getItem('col')
        }
    },
    methods: {
        goTabel (item) {
            this.$router.push({ name: item.path })
        },
        next () {
            this.actives.top = 0
        }
    },
}
</script>
<style lang="scss">
@import './index.scss';
</style>
