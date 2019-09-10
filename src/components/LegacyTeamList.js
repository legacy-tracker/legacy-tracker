import React from "react";
import "../styles/dashboard.css";
import Axios from "axios";
import { connect } from "react-redux";
import { getPlayers } from "../ducks/playersReducer";
class LegacyTeamList extends React.Component {
  constructor() {
    super();
    this.state = {
      teams: []
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
    this.props.getPlayers(team_id);
  };

  render() {
    console.log(this.props.players);
    const rosterNames = this.props.players.map(player => {
      return (
        <div>
          <h1>{player.player_name}</h1>
          <h5>{player.player_position}</h5>
          <h5>{player.player_team}</h5>
          <h5>{player.player_id}</h5>
        </div>
      );
    });

    return (
      <aside className="my-teams">
        <h1 className="my-teams-header">My Teams</h1>
        <div className="cards">
          <h5>{rosterNames}</h5>

          {this.state.teams.map(team => (
            <div className="team-cards">
              <>
                <h1>{team.team_name}</h1>
                <>
                  <button
                    onClick={e => {
                      this.handleRoster(team);
                    }}
                    name="team"
                  >
                    Roster
                  </button>
                </>
              </>
            </div>
          ))}
        </div>
      </aside>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    players: reduxState.players.players
  };
};

export default connect(
  mapStatetoProps,
  { getPlayers }
)(LegacyTeamList);
