import React from "react";
import "../styles/dashboard.css";
import Axios from "axios";
export default class LegacyTeamList extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      players: []
    };
  }

  componentDidMount() {
    Axios.get("/api/team")
      .then(res => {
        this.setState({ teams: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleRoster = team => {
    const { team_id } = team;
    Axios.get(`/api/userPlayers/${team_id}`).then(res => {
      this.setState({ players: res.data });
    });
  };

  render() {
    console.log(this.state);
    return (
      <aside className="my-teams">
        <h1 className="my-teams-header">My Teams</h1>
        <div className="cards">
          {this.state.teams.map(team => (
            <div className="team-cards">
              <>
                <h1>{team.team_name}</h1>
                <button onClick={e => this.handleRoster(team)} name="team">
                  Roster
                </button>
              </>
            </div>
          ))}
        </div>
      </aside>
    );
  }
}
