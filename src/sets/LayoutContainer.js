import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from './Layout'
import { getSets } from './data/sets/actions'
import * as SetsSelectors from './data/sets/selectors'
import { setActiveSetType } from './data/setTypes/actions'
// import * as SetTypesSelector from './data/setTypes/selectors'

class LayoutContainer extends Component {
  componentWillMount() {
    this.props.getSets()
  }

  filterSet(set, setType) {
    if (setType && setType !== 'any') {
      return set.set_type === setType
    } else {
      return true
    }
  }

  render() {
    const { activeSetType, sets } = this.props
    const filteredSets = sets.filter((set) => this.filterSet(set, activeSetType))

    return (
      <Layout
        sets={filteredSets}
        setTypes={this.props.setTypes}
        activeSetType={this.props.activeSetType}
        onSetTypeChange={this.props.setActiveSetType}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    activeSetType: state.setTypes.activeType,
    loadingSetTypes: state.setTypes.loading,
    setTypes: state.setTypes.types,
    sets: SetsSelectors.getSets(state),
    loadingSets: state.sets.loading
  }
}

const mapDispatchToProps = {
  getSets,
  setActiveSetType
}

const ConnectedLayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutContainer)

export default ConnectedLayoutContainer
