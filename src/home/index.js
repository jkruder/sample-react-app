import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingRouteIndicator from '../components/LoadingRouteIndicator'

const Home = Loadable({
  loader: () => import('./Layout'),
  loading: LoadingRouteIndicator
})

const routes = (
    <Route exact path="/" component={Home} />
)

export default {
  routes
}
