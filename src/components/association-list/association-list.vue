<template>
  <div class="association-list">
    <div class="second-page wid-100">
      <div class="cloud animated fadeInRight"></div>
      <div class="rabit animated rotateInDownLeft"></div>
      <div class="shetuan-list-box" id="app">
          <div class="shetuan-item animated tada" v-for="association in associationList">
            <div class="shetuan-item-box" v-on:click="selectAss(association)">
              <img class="shetuan-logo" v-bind:src="url + association.Logo" />
              <span class="shetuan-name">{{association.Name}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociationList} from 'api/association'
  import {HTTP_URL} from 'common/js/config'

  export default {
    data () {
      return {
        associationList: this.$store.getters.associationList,
        url: HTTP_URL
      }
    },
    created () {
      if (this.associationList.length === 0) {
        this._getAssList()
      }
    },
    methods: {
      selectAss (association) {
        this.$router.push({
          path: `/association/${association.Id}`
        })
      },
      _getAssList () {
        getAssociationList().then((res) => {
          this.associationList = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .second-page
    height: 31.921875rem
    position: absolute
    wid-100()
    bg-image("index2-bg")
    background-size: 100% 100%
    .cloud
      width: 9.796875rem
      height: 6.28125rem
      position: relative
      top: 0.15625rem
      bg-image("cloud")
      background-size: cover
    .rabit
      width: 3.03125rem
      height: 3.265625rem
      position: absolute
      top: 0.9375rem
      left: 0.6875rem
      bg-image("rabit")
      background-size: cover
    .shetuan-item
      position: absolute
      .shetuan-item-box
        position: relative
        wid-100()
        hei-100()
        .shetuan-logo
          position: absolute
        .shetuan-name
          width: 2.1875rem
          height: 0.5625rem
          line-height: 0.625rem
          letter-spacing: 0
          display: block
          position: absolute
          font-size: $font-size-small
          text-align: center
          bg-image("shetuan-name-bg")
          background-size: cover;
        .shetuan-logo
          position: absolute
    .shetuan-item:nth-child(1)
      width: 3.78125rem
      height: 2.671875rem
      right: 0.40625rem
      top: 5.859375rem
    .shetuan-item:nth-child(1) .shetuan-logo
      width: 3.046875rem;
      height: 2.5rem;
    .shetuan-item:nth-child(1) .shetuan-name
      color: #f9e19b;
      right: 0;
      bottom: 0;
      background-position: 0 0;
    .shetuan-item:nth-child(2)
      width: 5rem
      height: 1.90625rem
      left: 1.640625rem
      top: 8.53125rem
    .shetuan-item:nth-child(2) .shetuan-logo
      width: 3.15625rem
      height: 1.90625rem
    .shetuan-item:nth-child(2) .shetuan-name
      color: #95faed;
      right: 0;
      bottom: 0;
      background-position: -2.21875rem 0;
    .shetuan-item:nth-child(3)
      width: 4.9375rem
      height: 2.8125rem
      left: 2.34375rem
      top: 11.0625rem
    .shetuan-item:nth-child(3) .shetuan-logo
      width: 2.8125rem;
      height: 2.8125rem;
      right: 0;
    .shetuan-item:nth-child(3) .shetuan-name
      color: #6c9bdf
      left: 0
      top: 1.140625rem
      background-position: -4.4375rem 0
    .shetuan-item:nth-child(4)
      width: 2.6875rem
      height: 2.78125rem
      right: 0
      top: 13.390625rem
    .shetuan-item:nth-child(4) .shetuan-logo
      width: 2.6875rem
      height: 1.953125rem
      right: 0
      top: 0
    .shetuan-item:nth-child(4) .shetuan-name
      color: #f5b5df
      right: 0.21875rem
      bottom: 0
      background-position: -6.65625rem 0
    .shetuan-item:nth-child(5)
      width: 4.8125rem
      height: 2.3125rem
      left: 0.5625rem
      top: 14.5rem
    .shetuan-item:nth-child(5) .shetuan-logo
      width: 3.1875rem
      height: 2.3125rem
      right: 0
      top: 0
    .shetuan-item:nth-child(5) .shetuan-name
      color: #9ff29b
      left: 0
      bottom: 0.34375rem
      background-position: -8.875rem 0
    .shetuan-item:nth-child(6)
      width: 3.859375rem
      height: 2.671875rem
      right: 0
      bottom: 10.5625rem
    .shetuan-item:nth-child(6) .shetuan-logo
      width: 2.46875rem
      height: 2.671875rem
      right: 0
      top: 0
    .shetuan-item:nth-child(6) .shetuan-name
      color: #9ff29b
      left: 0
      top: 0.5625rem
      background-position: -11.09375rem 0
    .shetuan-item:nth-child(7)
      width: 3.59375rem
      height: 2.859375rem
      left: 0.4375rem
      bottom: 8.59375rem
    .shetuan-item:nth-child(7) .shetuan-logo
      width: 3.59375rem
      height: 2.03125rem
      left: 0
      top: 0
    .shetuan-item:nth-child(7) .shetuan-name
      color: #c7feff
      left: 0.5625rem
      bottom: 0
      background-position: -13.3125rem 0
    .shetuan-item:nth-child(8)
      width: 5.3125rem
      height: 2.6875rem
      right: 0.1875rem
      bottom: 4.84375rem
    .shetuan-item:nth-child(8) .shetuan-logo
      width: 3.5625rem
      height: 2.6875rem
      right: 0
      top: 0
    .shetuan-item:nth-child(8) .shetuan-name
      color: #9ff29b
      left: 0
      bottom: 0
      background-position: -15.53125rem 0
    .shetuan-item:nth-child(9)
      width: 3.5625rem
      height: 3.0625rem
      left: 0.375rem
      bottom: 1.3125rem
    .shetuan-item:nth-child(9) .shetuan-logo
      width: 3.5625rem
      height: 2.46875rem
      left: 0
      top: 0
    .shetuan-item:nth-child(9) .shetuan-name
      color: #8e3d20
      left: 0.1875rem
      bottom: 0
      background-position: -17.75rem 0
</style>