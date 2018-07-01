import React from 'react'
import { Link } from 'react-router-dom'
import { Image, List } from 'semantic-ui-react'

export default (props) => {
  const {
    set
  } = props
  const setUrl = `/sets/${set.code}`
  const styles = {
    width: 25
  }

  return (
    <List.Item>
      <Image as={Link} to={setUrl} src={set.icon_svg_uri} alt={`${set.name} icon`} style={styles}/>
      <List.Content as={Link} to={setUrl}>
        {set.name}
      </List.Content>
    </List.Item>
  )
}
