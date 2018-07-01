import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Card from '../../src/card'

storiesOf('Card', module)
  .add('base', () => (
    <Card.components.Card
      id={1}
      name="Some Card"
      imageUri="https://img.scryfall.com/cards/normal/en/m19/1.jpg?1529666354"
    />
  ))

storiesOf('CardCustom', module)
  .add('without flavorText', () => (
    <Card.components.CardCustom
      id={1}
      name="Some Card"
      type="Instant"
      imageUri="https://img.scryfall.com/cards/art_crop/en/m19/1.jpg?1529666354"
    />
  ))
  .add('with flavorText', () => (
    <Card.components.CardCustom
      id={1}
      name="Some Card"
      type="Instant"
      imageUri="https://img.scryfall.com/cards/art_crop/en/m19/1.jpg?1529666354"
      flavorText="This is flavor text."
    />
  ))
