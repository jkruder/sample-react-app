import React from 'react'
import { List } from 'semantic-ui-react'

import SetListItem from './SetListItem'

export default (props) => {
  const {
    sets
  } = props

  const setListItems = sets.map((set) => (
    <SetListItem key={set.code} set={set} />
  ))

  return (
    <List>{setListItems}</List>
  )
}
