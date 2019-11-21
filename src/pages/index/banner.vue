<template>
  <Swiper 
    :style="{'height':itemHeight}"
    :list="list" 
    :index="index" 
    :itemWidth="wrapperWidth" 
    @toggleIndex="toggleIndex" 
  >  
    <template #banner>
      <ul class="slideshow-item" :style="{'height':itemHeight}">
        <li v-for="item in list" :style="{'width':itemWidth + 'px'}" @click="pageAction(item.url)">
          <img :src="item.poster" :style="{'width':itemWidth + 'px', 'height':itemHeight}">
        </li>
      </ul>
    </template> 
    <template #dot>
      <ul  class="slideshow-dots">
        <li v-for="(item, $index) in bannerList" :class="{'active':$index == index-1}"></li>
      </ul>
    </template> 
  </Swiper>
</template>

<script>
  import Swiper from '@/components/swiper/index.vue'
  export default {
    data () {
      return {
        index: 1,
        wrapperWidth: 750 ,
        itemWidth: 750,
        itemHeight: '2.08rem',
      }
    },
    props: {
      bannerList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Swiper
    },
    computed: {
      list () {
        const list = Object.assign([],this.bannerList)
        if (list && list.length) {
          const len = list.length
          const firstEl = list[len - 1]
          const lastEl = list[0]
          list.unshift(lastEl)
          list.push(firstEl)
        }
        return list
      }
    },
    created () {
      const itemWidth = document.documentElement.clientWidth * .92
      this.wrapperWidth = itemWidth
      this.itemWidth = itemWidth
    },
    methods: {
      pageAction (url) {
        if (url) {
          location.href = url
        }
      },
      toggleIndex (val) {
        this.index = val
      }
    }
  }
</script>





