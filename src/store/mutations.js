
import * as types from './mutation-types'

const mutations = {
  [types.SET_ASSOCIATION_LIST] (state, list) {
    state.associationList = list
  }
}

export default mutations
