import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

import { loadRun, loadGames } from './../store/actions';
import Layout from '../components/Layout/Layout';
import RunInfo from '../components/RunInfo';
import Game from '../components/Game';
import Spinner from '../components/UI/Spinner';

class Run extends Component {
  componentDidMount() {
    this.props.onLoadRun(this.props.router.query.gameId);
    if (!this.props.games) {
      this.props.onLoadGames();
    }
  }
  render() {
    let game = <Spinner />;
    if (this.props.games) {
      const { gameId } = this.props.router.query;
      const gameDetails = this.props.games.find(game => game.id === gameId);
      game = <Game gameDetails={gameDetails} />;
    }

    let run = <Spinner />;
    if (this.props.runInfo) {
      run = <RunInfo runInfo={this.props.runInfo} />;
    }
    return (
      <Layout>
        {game}
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
    onLoadRun: gameId => dispatch(loadRun(gameId)),
    onLoadGames: () => dispatch(loadGames())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Run)
);
