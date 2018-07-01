import Api from '../../../api'

function createActionName(action) {
  return `MTG_APP/SETS/${action}`
}

// Action types
export const GET_SETS_PENDING = createActionName('GET_ALL_PENDING')
export const GET_SETS_SUCCESS = createActionName('GET_ALL_SUCCESS')
export const GET_SETS_FAILURE = createActionName('GET_ALL_FAILURE')

function getSetsPending() {
  return {
    type: GET_SETS_PENDING
  }
}

function getSetsSuccess(sets) {
  return {
    type: GET_SETS_SUCCESS,
    payload: sets
  }
}

function getSetsFailure(error) {
  return {
    type: GET_SETS_FAILURE,
    payload: error
  }
}

export function getSets() {
  return async (dispatch) => {
    dispatch(getSetsPending())
    try {
      const sets = await Api.getAllSets()
      dispatch(getSetsSuccess(sets))
    } catch(error) {
      dispatch(getSetsFailure(error))
    }
  }
}
