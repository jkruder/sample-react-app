import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Flag, Menu } from 'semantic-ui-react'

export default (props) => {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header as={Link} to='/'>
          MTG
        </Menu.Item>
        <Menu.Item as={Link} to='/sets'>
          Sets
        </Menu.Item>
      </Container>

      <Container>
        <Menu.Menu position='right'>
          <Menu.Item as='span'>
            <Flag name='us'/> Hello, User!
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
