import React, { Component } from 'react'
import { Container, Header, Image, List } from 'semantic-ui-react'
import Card from '../../card'
import Api from '../../api'

class Set extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    const code = this.props.match.params.code
    const metadata = await Api.getSet(code)
    const cards = await Api.getCardsInSet(metadata.code)

    this.setState({ metadata, cards })
  }

  renderCard(card) {
    return (
      <List.Item style={{borderLeft: 'none'}} key={card.id}>
        <Card.components.Card
          id={card.id}
          name={card.name}
          imageUri={card.image_uris.normal}
          type={card.type_line}
          oracleText={card.oracle_text}
          flavorText={card.flavor_text}
          artist={card.artist}
        />
      </List.Item>
    )
  }

  render() {
    if (this.state.metadata) {
      const metadata = this.state.metadata

      let cards = null
      if (this.state.cards) {
        const cardsList = this.state.cards.data.map(this.renderCard)

        cards = (
          <Container>
            <Header as='h2'>Cards</Header>
            <List horizontal celled>{cardsList}</List>
          </Container>
        )
      }

      return (
        <div>
          <Header as='h1'>
            <Image src={metadata.icon_svg_uri} alt={`${metadata.name} icon`} style={{width: 45}} />
            {metadata.name}
          </Header>
          <a href={metadata.scryfall_uri}>See on scryfall!</a>
          <span>Cards: {metadata.card_count}</span>
          {cards}
        </div>
      )
    }

    return <div>Loading set information for: {this.props.match.params.code}</div>
  }
}

export default Set
