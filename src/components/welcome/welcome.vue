<template>
  <div class="welcome">
    <div class="first-page wid-100 hei-100">
      <div class="wan"></div>
      <div class="zhuan"></div>
      <div class="jia1"></div>
      <div class="jia2"></div>
      <img class="online-xuanke" src="~welcome/online-xuanke.png" />
      <img class="jiajia-ico" src="~welcome/jiajia-ico.png" />
      <img class="jiajia" src="~welcome/jiajia.png" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociationList} from 'api/association'
  import {SET_ASSOCIATION_LIST} from '@/store/mutation-types'

  export default {
    created () {
      setTimeout(() => {
        this._getAssList()
      }, 1000)
    },
    methods: {
      _getAssList () {
        getAssociationList().then((res) => {
          this.$store.commit(SET_ASSOCIATION_LIST, res)
          this.$router.push('associationList')
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .first-page
    position: absolute
    bg-image("indexbg")
    background-size: 100% 100%
    wid-100()
    hei-100()
    .wan, .zhuan, .jia1, .jia2
      height: 1.578125rem
      position: absolute
      bg-image("index-title-bg")
      background-size: cover
    .wan
      width: 1.5625rem
      background-position: 0 0
      left: 1.015625rem
      top: 3.734375rem
      // transform: translateX(1.015625rem) translateY(-3rem) rotateZ(-1200deg)
    .zhuan
      width: 1.34375rem
      background-position: -4.390625rem 0
      left: 3.21875rem
      top: 3rem
    .jia1
      width: 1.359375rem
      background-position: -3.03125rem 0
      left: 5.328125rem
      top: 3rem
    .jia2
      width: 1.34375rem
      background-position: -1.625rem 0
      left: 7.390625rem
      top: 3.734375rem
    .online-xuanke
      width: 4.171875rem
      height: 0.796875rem
      position: absolute
      top: 5.90625rem
      left: 50%
      margin-left: -2.09375rem
    .jiajia-ico, .jiajia
      position: absolute
    .jiajia-ico
      width: 1.140625rem
      height: 0.921875rem
      left: 0.625rem
      bottom: 0.34375rem
    .jiajia
      width: 4.234375rem
      height: 0.46875rem
      left: 1.8125rem
      bottom: 0.46875rem
</style>
