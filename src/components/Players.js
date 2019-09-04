import React from "react";
import axios from "axios";

class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentTeam: "LAR",
      teamPlayers: [],
      playerStats: {}
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
      .then(() => {})
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
    return (
      <div>
        <button
          onClick={() => {
            this.filterForTeam("LA");
          }}
        >
          OAK
        </button>
        <button
          onClick={() => {
            console.log(this.state.teamPlayers[2].stats);
          }}
        >
          Get third player's stats
        </button>
      </div>
    );
  }
}

export default Player;
