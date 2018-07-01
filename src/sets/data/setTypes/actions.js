function createActionName(action) {
  return `MTG_APP/SET_TYPES/${action}`
}

export const FETCH_SET_TYPES = createActionName('FETCH')
export const SET_ACTIVE_SET_TYPE = createActionName('SET_ACTIVE_TYPE')

export const getSetTypes = () => ({type: FETCH_SET_TYPES})
export const setActiveSetType = (setType) => ({type: SET_ACTIVE_SET_TYPE, payload: setType})
