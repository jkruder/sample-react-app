import React from 'react'
import { Image } from 'semantic-ui-react'

export default (props) => {
  const {
    imageUri,
    name
  } = props

  const styles = {
    WebkitBorderRadius: '4.75% / 3.5%',
    borderRadius: '4.75% / 3.5%',
    maxWidth: 244
  }

  return (
    <Image src={imageUri} alt={`${name} icon`} style={styles} />
  )
}
