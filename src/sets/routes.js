import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import LoadingRouteIndicator from '../components/LoadingRouteIndicator'

const SetsLayoutContainer = Loadable({
  loader: () => import('./LayoutContainer'),
  loading: LoadingRouteIndicator
})
const SetLayoutContainer = Loadable({
  loader: () => import('./set'),
  loading: LoadingRouteIndicator
})

const routes = (
  <React.Fragment>
    <Route path="/sets/:code" component={SetLayoutContainer} />
    <Route exact path="/sets" component={SetsLayoutContainer} />
  </React.Fragment>
)

export default routes
