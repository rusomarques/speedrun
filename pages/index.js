import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadGames } from './../store/actions';

class Index extends Component {
  componentDidMount() {
    this.props.onLoadGames();
  }

  render() {
    return <h1>SPEEDRUN</h1>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadGames: () => dispatch(loadGames())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Index);
