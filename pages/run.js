import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { loadRun } from './../store/actions';
import Layout from '../components/Layout/Layout';
import RunInfo from '../components/RunInfo';
import Game from '../components/Game';

class Run extends Component {
  componentDidMount() {
    this.props.onLoadRun(this.props.router.query.gameId);
  }
  render() {
    const { gameId } = this.props.router.query;
    const game = this.props.games.find(game => game.id === gameId);

    let run = null;
    if (this.props.runInfo) {
      run = <RunInfo runInfo={this.props.runInfo} />;
    }
    return (
      <Layout>
        <Game gameDetails={game} />
        {run}
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    runInfo: state.run,
    games: state.games
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
