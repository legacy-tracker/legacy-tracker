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
    console.log(team_id);
    this.props.getPlayers(team_id);
  };

  render() {
    console.log(this.props.players);

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

let mapStatetoProps = reduxState => {
  return {
    players: reduxState.players.players
  };
};

export default connect(
  mapStatetoProps,
  { getPlayers }
)(LegacyTeamList);
