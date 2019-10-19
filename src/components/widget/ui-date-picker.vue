<template>
  <div>
    <div class="ui-picker" :class="{'active':isPicker}">
      <div class = "ui-picker__hd">
        <span class="ui-picker__action" @click="cancel">取消</span>
        <span class="ui-picker__action" @click="confirm">确定</span>
      </div>
      <div class = "ui-picker__bd">
        <div class="ui-picker__group">
          <ul class="ui-picker__content">
            <li v-for="num in 3"></li>
            <li class="ui-picker__item" :class="{'active': checkedDate[0]== index}" v-for="(item,index) in pickerData">{{item.label}}</li>
            <li v-for="num in 3"></li>
          </ul>
          <div class="ui-picker__mask"></div>
          <div class="ui-picker__indicator"></div>
        </div>
        <div class="ui-picker__group">
          <ul class="ui-picker__content">
            <li v-for="num in 3"></li>
            <li class="ui-picker__item" :class="{'active': checkedDate[1]== index}" v-for="(item,index) in months">{{item.label}}</li>
            <li v-for="num in 3"></li>
          </ul>
          <div class="ui-picker__mask"></div>
          <div class="ui-picker__indicator"></div>
        </div>
        <div class="ui-picker__group" v-if="isDays">
          <ul class="ui-picker__content">
            <li v-for="num in 3"></li>
            <li class="ui-picker__item" :class="{'active': checkedDate[2]== index}" v-for="(item,index) in dates">{{item.label}}</li>
            <li v-for="num in 3"></li>
          </ul>
          <div class="ui-picker__mask"></div>
          <div class="ui-picker__indicator"></div>
        </div></div>
    </div>
    <div class="ui-mask" :class="{'active':isPicker}"></div>
  </div>
</template>

<script>

  import IScroll from '@/libs/IScroll'
  export default {
    props: {
      start: {
        default: 1920,
        type: Number
      },
      end: {
        default: 2018,
        type: Number
      },
      selectValue: {
        default: ['1990','01','10'],
        type: Array
      },
      isPicker: {
        default: false,
        type: Boolean
      },
      isDays: {
        default: true,
        type: Boolean
      },
      selectPicker: {
        default: '',
        type: String
      }
    },
    data () {
      return {
        scroll: [],
        checkedDate: [0,0,0],
        pickerData: []

      }
    },
    computed: {
      selectYear () {
        return this.selectValue[0] - this.start
      },
      selectMonth () {
        return this.selectValue[1] - 1
      },
      selectDate () {
        return this.selectValue[2] - 1
      },
      months () {

        return this.pickerData[this.checkedDate[0]].children

      },
      dates () {
        return this.months[this.checkedDate[1]].children
      }
    },
    created () {
      this.initData()
    },
    watch: {
      isPicker (newVal) {
        if (newVal) {
          setTimeout(() => {
            this.scrollList()
          },0)
        }
      }
    },
    methods: {
      initData () {
        let data = []
        const daysTotal = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]           //所有月份的天数
        for (let i = this.start; i <= this.end; i++) {
          let months = []
          if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {                     //判定为闰年
            daysTotal[1] = 29
          } else {
            daysTotal[1] = 28
          }
          for (let j = 0; j < 12; j++) {
            let dates = []
            for (var k = 1; k < daysTotal[j] + 1; k++) {
              let date = {
                label: k + '日',
                value: k
              }
              dates.push(date)
            }
            months.push({
              label: j + 1 + '月',
              value: j + 1,
              children: dates,
            })
          }
          let year = {
            label: i + '年',
            value: i,
            children: months
          }
          data.push(year)
        }

        this.pickerData = data
      },
      scrollList () {
        const self = this
        this.scroll = []
        this.checkedDate =  [this.selectYear, this.selectMonth, this.selectDate]
        const itemHeight = parseFloat(document.documentElement.style.fontSize) * .68
        const groupEle = document.querySelectorAll('.ui-picker__group')
        const len = groupEle.length

        Array.from(groupEle).forEach((item,idx) => {
          var iscroll = new IScroll(item, {
            scrollX: false
          })

          self.scroll.push(iscroll)

          iscroll.on('scrollEnd', function () {

            const itemLen = item.querySelectorAll('.ui-picker__content li').length - 7

            let result = ( -this.y / itemHeight)

            if (result > itemLen) {
              result = itemLen
            }

            let index = parseInt(result, 10)

            const diff = result - index

            if (diff > 0.5) {
              index++
            }

            self.checkedDate.splice(idx,1,index)
            self.scroll[len-1].refresh()
            if (idx == 1) {
              const prevDays = self.checkedDate[2]
              const nextDays =  self.months[index].children.length - 1
              const daysIndex = prevDays > nextDays ? nextDays : prevDays
              self.checkedDate.splice(2,1,daysIndex)
              self.scroll[len-1].scrollTo(0,-daysIndex * itemHeight )
            }
            iscroll.scrollTo(0, -index * itemHeight)
          })
          this.scroll[idx].scrollTo(0, -self.checkedDate[idx] * itemHeight)
        })
      },
      cancel () {
        this.$emit('togglePicker', false)
      },
      confirm () {
        let monthVal =  this.checkedDate[1] + 1
        let dateVal = this.checkedDate[2] + 1
        if (monthVal < 10) {
          monthVal = '0' + monthVal
        }
        if (dateVal < 10) {
          dateVal = '0' + dateVal
        }

        let value = this.checkedDate[0] + this.start + '-' + monthVal

        if (this.isDays) {
          value += '-' + dateVal
        }
        this.$emit('togglePicker', false)
        this.$emit('confirm',value)
      }
    }
  }

</script>

<style lang="scss">

  .ui-picker {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 5000;
    transform: translateY(100%) translate3d(0, 0, 0);
    transition: transform 0.5s cubic-bezier(0.4, 0.01, 0.165, 0.99);
    background: #fff;
  }

  .ui-picker.active {
    transform: translateY(0)
  }
  .ui-picker__hd {
    display: flex;
    background-color: #fff;
    position: relative;
    text-align: center;
    border-bottom: .01rem solid #d7d7dc;
  }
  .ui-picker__action {
    display: block;
    flex: 1;
    color: #1aad19;
    padding: .2rem .32rem;
    font-size: .32rem;
  }
  .ui-picker__action:first-child {
    text-align: left;
    color:#888;
  }
  .ui-picker__action:last-child {
    text-align: right;
  }
  .ui-picker__bd {
    display: flex;
    position: relative;
    background-color: #fff;
    height: 4.76rem;
    overflow: hidden;
  }
  .ui-picker__group {
    flex: 1;
    position: relative;
    height: 100%;
  }
  .ui-picker__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 3;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 2.04rem;
    background-repeat: no-repeat;
    transform: translateZ(0);
  }
  .ui-picker__indicator {
    width: 100%;
    height: .68rem;
    position: absolute;
    left: 0;
    top: 2.04rem;
    z-index: 3;
  }
  .ui-picker__indicator:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: .01rem;
    width: 100%;
    background: #d7d7dc;
  }
  .ui-picker__indicator:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: .01rem;
    width: 100%;
    background: #d7d7dc;
  }
  .ui-picker__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .ui-picker__content li{
    line-height: .68rem;
    height: .68rem;
    text-align: center;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size:.32rem;
    &.active {
       color: #333;
       font-size: .36rem;
     }
  }
</style>
