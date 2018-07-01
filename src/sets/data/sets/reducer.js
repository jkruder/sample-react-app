import * as Actions from './actions'

const initialState = {
  loading: false,
  data: []
}

const handleAction = {
  [Actions.GET_SETS_PENDING]: (state, action) => {
    return {
      ...state,
      loading: true
    }
  },
  [Actions.GET_SETS_SUCCESS]: (state, action) => {
    return {
      ...state,
      loading: false,
      ...action.payload
    }
  },
  [Actions.GET_SETS_FAILURE]: (state, action) => {
    return {
      ...state,
      loading: false
    }
  }
}

export default (state = initialState, action) => {
  if (handleAction[action.type]) {
    return handleAction[action.type](state, action)
  }

  return state
}
