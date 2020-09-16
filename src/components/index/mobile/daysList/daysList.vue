<!--
 * @Author: 王精华
 * @Date: 2020-09-04 13:49:38
 * @LastEditTime: 2020-09-16 18:15:19
 * @LastEditors: 王精华
 * @Description: 
-->
<template>
  <div class="days-list">
    <div class="days">
      <div class="days-head">
        <div class="days-head-info">
          <i class="iconfont icon-chevron_left_24px"
             @click="beforDay()">
            前一天
          </i>
        </div>
        <div class="days-head-info">{{year}}年{{month}}月{{day}}日 <i class="iconfont icon-date_range_24px"></i></div>

        <div class="days-head-info"
             @click="nextDay()">后一天
          <i class="iconfont icon-chevron_right_24px"></i>
        </div>
      </div>
      <div class="day-list">
        <div class="week"
             v-for="(item, index) in week"
             :key="index">
          {{item}}
        </div>
      </div>
      <div class="day-list days">
        <div class="day"
             :class="{'colored':item.color}"
             v-for="(item, index) in days"
             :key="index">
          {{item.day}}
        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'days-list',
  data () {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
      days: [],
      week: ['一', '二', '三', '四', '五', '六', '日'],//星期
      maxMonth: [1, 3, 5, 7, 8, 10, 12],//平月
      minMonth: [4, 6, 9, 11],//闰月
    }
  },
  created () {
    this.init()
  },
  methods: {
    // 初始化日历
    init () {
      let nowDate = this.nowDayStart()//每月一号对应的星期数
      let monthDay = this.getMonthDay()//每月有多少天
      let beforeDay = this.getbeforeDay()//每月的上一月有多少天
      let nowNum = 31//初始所有的天数
      const allDay = 42//7*6布局所有的数
      switch (monthDay) {
        case 31:
          break;
        case 30:
          nowNum -= 1
          break;
        case 29:
          nowNum -= 2
          break;
        case 28:
          nowNum -= 3
          break;
      }
      // console.log(nowDate)
      if (nowDate != 0) {
        for (let a = 0; a < nowDate - 1; a++) {
          this.days.push({
            day: beforeDay - a,
            color: false
          })

        }
      } else {
        for (let a = 0; a < 6; a++) {
          this.days.push({
            day: beforeDay - a,
            color: false
          })

        }
      }
      this.days.reverse()
      for (let i = 0; i < allDay; i++) {
        let day = i + 1
        let nowDay = allDay - nowNum
        if (day > nowNum) {
          for (let b = 0; b <= nowDay - 1; b++) {
            let dayed = b + 1
            this.days.push({
              day: dayed,
              color: false
            })
          }
          // return
        }
        this.days.push({
          day: day,
          color: true
        })
      }
      this.days.length = 42
    },
    getbeforeDay () {
      let month = this.month - 1
      let max = this.maxMonth
      let min = this.minMonth
      let year = this.getYeared()//今年是闰年还是平年：1平2闰
      if (month == 2) {
        if (year == 1) {
          return 29//闰年
        } else {
          return 28//平年
        }
      }
      if (max.indexOf(month) == -1) {
        return 30
      } else {
        return 31
      }
    },
    nowDayStart () {
      let year = this.year
      let month = this.month - 1
      let week = new Date(year, month, 1).getDay()
      return week
    },
    getMonthDay () {
      let month = this.month
      let max = this.maxMonth
      let min = this.minMonth
      let year = this.getYeared()//今年是闰年还是平年：1平2闰
      if (month == 2) {
        if (year == 1) {
          return 29//闰年
        } else {
          return 28//平年
        }
      }
      if (max.indexOf(month) == -1) {
        return 30
      } else {
        return 31
      }
    },
    getYeared () {
      const year = this.year
      while (1) {
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
          return 1;//闰年
        }
        else {
          return 2;//平年
        }
      }

    },
    beforDay () {
      this.days.length = 0
      let month = this.month
      if (month > 1) {
        this.month--
      } else {
        this.month = 12
        this.year--
      }
      this.init()
    },
    nextDay () {
      this.days.length = 0
      let month = this.month
      if (month < 12) {
        this.month++
      } else {
        this.month = 1
        this.year++
      }
      this.init()
    }
  },

}
</script>
<style lang="scss" scoped>
@import './daysList.scss';
</style>
