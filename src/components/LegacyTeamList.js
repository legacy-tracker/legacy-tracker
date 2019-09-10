import React from "react";
import "../styles/dashboard.css";
import Axios from "axios";
import { connect } from "react-redux";
import { getPlayers, getId, getPosition } from "../ducks/playersReducer";
import { Link } from "react-router-dom";
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

  handlePlayer = player => {
    const { player_id, player_position } = player;

    this.props.getPosition(player_position);
    this.props.getId(player_id);
  };

  render() {
    console.log(this.props);
    const rosterNames = this.props.players.map(player => {
      return (
        <div>
          <h1>{player.player_name}</h1>
          <h5>{player.player_position}</h5>
          <h5>{player.player_team}</h5>
          <h5>{player.player_id}</h5>
          <Link to="/stats">
            <button
              onClick={() => {
                this.handlePlayer(player);
              }}
            >
              Stats
            </button>
          </Link>
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
    players: reduxState.players.players,
    id: reduxState.players.id,
    playerPosition: reduxState.players.playerPosition
  };
};

export default connect(
  mapStatetoProps,
  { getPlayers, getId, getPosition }
)(LegacyTeamList);
