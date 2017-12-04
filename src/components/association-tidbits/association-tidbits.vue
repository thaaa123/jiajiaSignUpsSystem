<template>
  <div class="association-tidbits">
    <div class="imageBg"></div>
    <div class="huaxu-content-box" >
      <span class="media-title radius">精彩视频</span>
      <div class="media-content-box">
        <div class="media-item" v-for="item in albumList" v-if="item.Type =='视频'">
          <div class="media radius video">
            <img class="wid-100 hei-100" v-bind:src="url + item.Cover" />
          </div>
                  
          <div class="video-sign wid-100 just-center vert-center">
            <img src="images/video-sign.png" />
          </div>
          <span>{{item.Name}}</span>
        </div>
      </div>
      <span class="media-title radius">社团照片</span>
      <div class="media-content-box">
        <div class="media-item"   v-for="item in albumList" v-if="item.Type =='图片'">
          <div class="media radius">
            <img class="wid-100 hei-100" v-bind:src="url + item.Cover" />
          </div>
          <span>{{item.Name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAlbum} from 'api/association'
  import {HTTP_URL} from 'common/js/config'

  export default {
    data () {
      return {
        assId: 0,
        albumList: [],
        url: HTTP_URL
      }
    },
    created () {
      this.assId = this.$route.params.id
      this._getAlbum(this.assId)
    },
    methods: {
      _getAlbum (assId) {
        getAlbum(assId).then((res) => {
          this.albumList = res
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .imageBg
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    bg-image("teacher-body-bg")
    background-size: 100% 100%
    z-index -1
  .huaxu-content-box
    padding: 0 0.3125rem
    .media-title
      width: 2.5rem
      height: 0.625rem
      margin: 0.375rem 0 0.4375rem
      line-height: 0.625rem
      font-size: 0.375rem
      letter-spacing: 0.03125rem
      color: #fff
      display: block
      text-align: center
      background: #69c8b2
      radius()
    .media-content-box
      display: flex
      flex-wrap: wrap
      justify-content: flex-start
      .media-item
        width: 3.046875rem;
        margin-right: 0.09375rem;
        position: relative;
        .media
          border: solid 0.0625rem #f6b37f
          radius()
          img 
            wid-100()
            hei-100()
        .video-sign
          position: absolute
          top: 0
          left: 0
          wid-100()
          just-center()
          vert-center()
        .video-sign img
          width: 1.125rem;
          height: 1.125rem;
      .media-item:nth-child(3n)
        margin-right: 0
      .media-item .media,.media-item .video-sign
        height: 2.21875rem;
        cursor: pointer;
        -webkit-tap-highlight-color:transparent;  
        -webkit-user-select:none; 
      .media-item span
        height: 0.65625rem
        line-height: 0.65625rem
        margin-bottom: 0.078125rem
        display: block
        font-size: 0.28125rem
        letter-spacing: 0
        color: #595959
</style>
