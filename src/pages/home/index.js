import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import './App.css'
import qs from 'stringquery'
import Leaderboard from '../../components/leaderboard'
import Button from '../../components/gamebutton'

var params = {};
class App extends Component {
  render() {
    const { data } = this.props
    var leaderboard
    
    if (!data.loading) {
      leaderboard = data.PublicLeaderboard
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>{params.name ? params.name : 'Escolha um leaderboard'}</h1>
          <h2>{params.key}</h2>
        </header>
        <Button leaderboardkey="score" appid="922454064574463" name="Baseline" />
        <Button leaderboardkey="coin" appid="922454064574463" name="Baseline" />
        <Button leaderboardkey="level" appid="2037353706502553" name="BirbsConsume" />
        <p className="App-intro">
        </p>
        <Leaderboard leaderboard={leaderboard}/>
      </div>
    )
  }
}

const QUERY = gql`
  query QueryName ($key: String!, $appid: String!) { 
    PublicLeaderboard (key: $key, appid: $appid) {
      score
      id
    }
  }
`

export default graphql(QUERY, {
  options: (props) => {
    params = qs(props.location.search);
    return { variables: { key: params.key, appid: params.appid } }
  }
})(App)