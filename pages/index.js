import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadGames } from './../store/actions';
import Layout from '../components/Layout/Layout';
import GameList from '../components/GameList';

class Index extends Component {
  componentDidMount() {
    this.props.onLoadGames();
  }

  render() {
    return (
      <Layout>
        <GameList games={this.props.games} />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadGames: () => dispatch(loadGames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
