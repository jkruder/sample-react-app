import * as Actions from './actions'

const initialState = {
  loading: false,
  activeType: 'any',
  types: {
    'any': {'name': 'Any'},
  	'core': {'name': 'Core'},
  	'expansion': {'name': 'Expansion'},
  	'masters': {'name': 'Masters'},
  	'masterpiece': {'name': 'Masterpiece'},
  	'from_the_vault': {'name': 'From The Vault'},
  	'spellbook': {'name': 'Spellbook'},
  	'premium_deck': {'name': 'Premium Deck'},
  	'duel_deck': {'name': 'Duel Deck'},
  	'draft_innovation': {'name': 'Draft Innovation'},
  	'commander': {'name': 'Commander'},
  	'planechase': {'name': 'Planechase'},
  	'archenemy': {'name': 'Archenemy'},
  	'vanguard': {'name': 'Vanguard'},
  	'funny': {'name': 'Funny'},
  	'starter': {'name': 'Starter'},
  	'box': {'name': 'Box'},
  	'promo': {'name': 'Promo'},
  	'token': {'name': 'Token'},
  	'memorabilia': {'name': 'Memorabilia'}
  }
}

const handleAction = {
  [Actions.SET_ACTIVE_SET_TYPE]: (state, action) => {
    return {
      ...state,
      activeType: action.payload
    }
  }
}

export default (state = initialState, action) => {
  if (handleAction[action.type]) {
    return handleAction[action.type](state, action)
  }
  return state
}
