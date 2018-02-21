<template>
  <div class="teacher-list">
    <div class="imageBg"></div>
    <div class="teacher-box" >
      <div class="teacher-item" v-for="(item,$index) in teacherList">
        <img class="teacher-img radius animated rotateInDownLeft" v-lazy="url + item.Photo" />
        <div class="teacher-info-box">
          <p>
              <span>{{item.Name}}</span>&nbsp;&nbsp;&nbsp;
          </p>
          <p>{{item.Content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getTeacherList} from 'api/association'
  import {HTTP_URL} from 'common/js/config'

  export default {
    data () {
      return {
        assId: 0,
        teacherList: [],
        url: HTTP_URL
      }
    },
    created () {
      this.assId = this.$route.params.id
      this._getTeacherList(this.assId)
    },
    methods: {
      _getTeacherList (assId) {
        getTeacherList(assId).then((res) => {
          this.teacherList = res
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  img[lazy=loading]
    opacity 0
    transition: opacity 1s
  .imageBg
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    bg-image("teacher-body-bg")
    background-size: 100% 100%
    z-index -1
  .teacher-box
    padding: 0.65625rem 0.3125rem
    background-color: rgba(0,0,0,0);
    .teacher-item
      margin-bottom: 0.46875rem
      display: flex
      justify-content: space-between
      font-size 0.152rem
      radius()
      .teacher-img
        width: 2.96875rem
        height: 2.65625rem
        box-sizing: content-box
        border: solid 0.046875rem #f6b37f
      .teacher-info-box
        width: 5.003125rem
        height: 2.859375rem
        padding: 0 0.5rem 0 0.95125rem
        bg-image("teacher-info-bg")
        background-size: cover
        flex-direction: column
        just-center()
      .teacher-info-box p
        margin-bottom: 0.1875rem
        padding-bottom: 0.0625rem
        position: relative
        font-size: $font-size-small-s
      .teacher-info-box p:after
        position: absolute
        right: 0
        bottom: 0
        left: 0
        height: 1px
        content: ''
        background-color: #c8c7cc
      .teacher-info-box p span
        margin-right: 0.25rem

</style>
