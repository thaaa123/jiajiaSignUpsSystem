<template>
  <div class="association">
    <div class="shetuan-header wid-100" v-bind:style="{backgroundImage: 'url(' + url + association.Bg + ')'}">
        <div class="shetuan-logo-box just-center vert-center">
            <img class="shetuan-logo" v-bind:src="url + association.Logo" />
        </div>
        <span class="shetuan-name radius">{{association.Name}}</span>
    </div>
    <div class="shetuan-bar wid-100 shadow">
      <a class="shetuan-bar-item just-center vert-center active">
          <span class="item-ico first"></span>
          <span class="item-name">社团详情</span>
      </a>
      <a class="shetuan-bar-item just-center vert-center">
          <span class="item-ico second"></span>
          <span class="item-name">教师配备</span>
      </a>
      <a class="shetuan-bar-item just-center vert-center">
          <span class="item-ico third"></span>
          <span class="item-name">社团花絮</span>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociation} from 'api/association'
  import {HTTP_URL} from 'common/js/config'

  export default {
    data () {
      return {
        assId: 0,
        association: {},
        url: HTTP_URL
      }
    },
    created () {
      this.assId = this.$route.params.id
      this._getAss(this.assId)
    },
    methods: {
      _getAss (assId) {
        getAssociation(assId).then((res) => {
          this.association = res[0]
          console.log(this.association.Name)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  
  .shetuan-header
    height: 2.90625rem
    padding-top: 0.21875rem
    background-repeat: no-repeat
    background-size: cover
    wid-100()
    .shetuan-logo-box
      width: 1.8125rem
      height: 1.8125rem
      margin: 0 auto 0.109375rem
      background: #fff
      border-radius: 50%
      vert-center()
      just-center()
      .shetuan-logo
        width: 1.484375rem
        height: 1.171875rem
    .shetuan-name
      width: 2.21875rem
      height: 0.625rem
      line-height: 0.625rem
      margin: 0 auto
      text-align: center
      font-size: $font-size-medium
      display: block
      color: #e2bb9c
      background: #fff
      radius()
  .shetuan-bar
    height: 1.09375rem
    background: #f1fbfb
    display: flex
    wid-100()
    shadow()
    .shetuan-bar-item
      text-decoration: none
      flex: 1
      display: flex
      vert-center()
      just-center()
      .item-ico
        width: 0.625rem
        height: 0.53125rem
        margin-right: 0.21875rem
        display: block
        bg-image("she-tuan-bar-bg")
        background-size: cover
      .first
        background-position: 0 0
      .second
        background-position: -0.65625rem 0
      .third
        background-position: -1.3125rem 0
      .item-name
        font-size: $font-size-medium-x
        color: #c1aa97
    .shetuan-bar-item.active .item-name
      color: #e9865f
    


</style>