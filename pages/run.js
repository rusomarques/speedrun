import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { loadRun } from './../store/actions';
import Layout from '../components/Layout/Layout';

class Run extends Component {
  componentDidMount() {
    this.props.onLoadRun(this.props.router.query.gameId);
  }
  render() {
    let run = null;
    if (this.props.runInfo) {
      run = <p>PlayerName: {this.props.runInfo.playerName}</p>;
    }
    return <Layout>{run}</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    runInfo: state.run
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadRun: gameId => dispatch(loadRun(gameId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Run)
);
