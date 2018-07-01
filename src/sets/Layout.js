import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import SetList from './components/SetList'

export default (props) => {
  const {
    activeSetType,
    onSetTypeChange,
    setTypes,
    sets
  } = props

  const setTypeOptions = Object.entries(setTypes).map(([typeKey, type]) => ({text: type.name, value: typeKey}))

  return (
    <div>
      <h3>Sets</h3>
      <Dropdown
        title='Select type'
        fluid
        selection
        value={activeSetType}
        options={setTypeOptions}
        onChange={(event, data) => onSetTypeChange(data.value)}
      />
      <SetList sets={sets} />
    </div>
  )
}
