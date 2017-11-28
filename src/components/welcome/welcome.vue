<template>
  <div class="welcome">
    <div class="first-page wid-100 hei-100">
      <div class="wan"></div>
      <div class="zhuan"></div>
      <div class="jia1"></div>
      <div class="jia2"></div>
      <!-- <img class="online-xuanke animated" src="images/online-xuanke.png" />
      <img class="jiajia-ico animated" src="images/jiajia-ico.png" />
      <img class="jiajia animated" src="images/jiajia.png" /> -->
	  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociationList} from 'api/association'
  export default {
    created () {
      this._getAssList()
    },
    methods: {
      _getAssList () {
        getAssociationList().then((res) => {
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
    // background : green
    height: 100px
    width: 100%
    no-wrap()
	  bg-image("logo")
	  // background-size: 100% 100%
</style>