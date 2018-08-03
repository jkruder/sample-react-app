import 'semantic-ui-css/semantic.min.css'
import './App.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { Container } from 'semantic-ui-react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './home'
import Sets from './sets'

const MtgApp = ({ store }) => (
  <Provider store={store}>
    <Router basename="/mtg">
      <div>
        <Header />

        <Container style={{ marginTop: '7em' }}>
          <Switch>
            { Home.routes }
            { Sets.routes }
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  </Provider>
)

export default MtgApp
