import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PlayerCard from "./PlayerCard";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentTeam: "",
      teamPlayers: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2019&format=json&statType=seasonProjectedStats"
      )
      .then(res => {
        this.setState({ data: res.data.players });
        console.log(this.state.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  filterForTeam(team) {
    const selectedTeamPlayers = this.state.data.filter(player => {
      return player.teamAbbr === team;
    });
    this.setState({ teamPlayers: selectedTeamPlayers });
    console.log(this.state.teamPlayers);
  }

  render() {
    console.log(this.state.teamPlayers);
    return <div></div>;
  }
}

export default Player;
