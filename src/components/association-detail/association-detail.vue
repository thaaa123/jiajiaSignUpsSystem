<template>

  <div class="association-detail">
    <div class="shetuan-content-box">
        <div class="shetuan-detail-box wid-100 shadow">
            <div class="shetuan-detail" v-for="item in associationDetail" v-html="item.Content"></div>
            <div class="detail-bottom wid-100 animated fadeInUp"></div>
        </div>
        <div class="shetuan-time-box wid-100 shadow">
            <div class="shetuan-time just-center">
                <span>选社时间：{{XuanTuanTime}}</span>
                <span>选社频率：{{XuanTuanPinLv}}</span>
            </div>
            <div class="shetuan-time-right"></div>
        </div>
        <div class="shetuan-bottom wid-100"></div>
        <button class="baoming-btn wid-100 radius shadow" id="baoMing">我要报名</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociationDetail, getPiCi} from 'api/association'

  export default {
    data () {
      return {
        assId: 0,
        associationDetail: [],
        XuanTuanTime: '',
        XuanTuanPinLv: ''
      }
    },
    created () {
      this.assId = this.$route.params.id
      this._getAssDetail(this.assId)
      this._getPiCi(this.assId)
    },
    methods: {
      _getAssDetail (assId) {
        getAssociationDetail(assId).then((res) => {
          this.associationDetail = res
        })
      },
      _getPiCi (assId) {
        getPiCi(assId).then((res) => {
          if (res.length !== 0) {
            let start = new Date(res[0].StartTime)
            let end = new Date(res[0].EndTime)
            let now = new Date()
            if (now < start || now > end) {
              this.XuanTuanTime = '未开放'
            } else {
              this.XuanTuanTime = start.substring(0, start.indexOf('T'))
              this.XuanTuanPinLv = res[0].PinLv
            }
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .shetuan-content-box
    padding: 0.625rem 0.3125rem 1.5625rem
    .shetuan-detail-box
      min-height: 2.75rem
      max-height: 6.625rem
      margin-bottom: 0.5625rem
      position: relative
      background: #fff
      color: rgb(0, 0, 0)
      wid-100()
      shadow()
      .shetuan-detail
        max-height: 6.625rem
        padding: 0.25rem
        padding-bottom: 1.75rem
        font-size: $font-size-medium
        overflow:hidden
        letter-spacing
        word-wrap: break-word
      .shetuan-detail p
        max-height:100%
      .shetuan-detail img
        max-width: 100%
        max-height:2.5625rem
        z-index:100
      .detail-bottom
        wid-100()
        height: 1.75rem
        position: absolute
        bottom: 0
        bg-image("shetuan-detail-bg")
        background-size: cover
    .shetuan-time-box
      height: 2.53125rem
      margin-bottom: 0.375rem
      padding: 0.40625rem 0.25rem
      background: #fff
      position: relative
      shadow()
      .shetuan-time
        width: 4.21875rem
        height: 1.75rem
        background: #77beba
        flex-direction: column
        radius()
        just-center()
      .shetuan-time span
        margin: 0.15625rem 0 0.15625rem 0.1875rem
        display: block
        color: #fff
        font-size: 0.40625rem
      .shetuan-time-right
        width: 4.75rem
        height: 2.15625rem
        position: absolute
        right: 0.0625rem
        bottom: 0
        bg-image("shetuan-time-bg")
        background-size: cover
    .shetuan-bottom
      height: 1.359375rem
      margin-bottom: 0.078125rem
      bg-image("shetuan-bottom-bg")
      background-size: cover
    .baoming-btn
      width: 10.375rem
      height: 1.09375rem
      color: #fff
      font-size: $font-size-large
      font-family: inherit
      letter-spacing: 0.09375rem
      border-style: initial
      border: solid 1px #7fc5c1
      background-color: #77beba
      position:fixed
      bottom: 0.3125rem
      shadow()
      radius()
</style>
