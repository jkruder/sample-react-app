import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import App from './App'
import configureStore from './data/configureStore'

const store = configureStore()

// service workers would be neat to explore but are not relevant
// to work's environment -- the user must be connected at all times
// import registerServiceWorker from './registerServiceWorker'
// registerServiceWorker()

ReactDOM.render(<App store={store} />, document.getElementById('root'))
