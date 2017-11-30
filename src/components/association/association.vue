<template>
  <div class="association">
    <p>id:{{assId}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getAssociation} from 'api/association'

  export default {
    data () {
      return {
        assId: 0
      }
    },
    created () {
      this.assId = this.$route.params.id
      this._getAss(this.assId)
    },
    methods: {
      _getAss (assId) {
        getAssociation(assId).then((res) => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
 
</style>