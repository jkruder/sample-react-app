import React from 'react'
import { Card, Image } from 'semantic-ui-react'

function renderFlavorText(flavorText) {
  let flavorTextArea = null
  if (flavorText) {
    flavorTextArea = <Card.Meta>{flavorText}</Card.Meta>
  }

  return flavorTextArea
}

export default (props) => {
  const {
    artist,
    flavorText,
    imageUri,
    name,
    oracleText,
    type
  } = props

  const flavorTextArea = renderFlavorText(flavorText)

  return (
    <Card>
      <Image src={imageUri} alt={`${name} icon`}/>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Header>{type}</Card.Header>
        <Card.Description>{oracleText}</Card.Description>
        {flavorTextArea}
      </Card.Content>

      <Card.Content extra>
        {artist}
      </Card.Content>
    </Card>
  )
}
