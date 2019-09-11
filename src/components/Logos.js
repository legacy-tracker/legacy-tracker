import React from "react";
import "../styles/logos.css";
import "../styles/dashboard.css";
import CurrentTeam from "../components/CurrentTeam";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addQb, addRb, addWr, addTe, addK } from "../ducks/legacyTeamReducer";
// import LoaderNews from "./LoaderNews";
import LoaderIcons from "./Loader-Icons";

class Logos extends React.Component {
  constructor() {
    super();
    this.state = {
      // data: [],
      currentTeam: "",
      teamPlayers: [],
      qb: [],
      rb: [],
      wr: [],
      te: [],
      k: [],
      counter: 0,
      showPopup: "no-popup"
    };
  }

  handleAddQb = (e, qb) => {
    this.props.addQb(qb);

    const { id, name, teamAbbr, position } = qb;
    const teamId = this.props.team.team_id;
    axios.post("/api/userPlayers", {
      id,
      name,
      teamAbbr,
      position,
      teamId
    });
    this.setState({ counter: (this.state.counter += 1) });
  };
  handleAddRb = (e, rb) => {
    this.props.addRb(rb);

    const { id, name, teamAbbr, position } = rb;
    const teamId = this.props.team.team_id;
    axios.post("/api/userPlayers", {
      id,
      name,
      teamAbbr,
      position,
      teamId
    });
    this.setState({ counter: (this.state.counter += 1) });
  };
  handleAddWr = (e, wr) => {
    this.props.addWr(wr);

    const { id, name, teamAbbr, position } = wr;
    const teamId = this.props.team.team_id;
    axios.post("/api/userPlayers", {
      id,
      name,
      teamAbbr,
      position,
      teamId
    });
    this.setState({ counter: (this.state.counter += 1) });
  };
  handleAddTe = (e, te) => {
    this.props.addTe(te);

    const { id, name, teamAbbr, position } = te;
    const teamId = this.props.team.team_id;
    axios.post("/api/userPlayers", {
      id,
      name,
      teamAbbr,
      position,
      teamId
    });
    this.setState({ counter: (this.state.counter += 1) });
  };
  handleAddK = (e, k) => {
    this.props.addK(k);

    const { id, name, teamAbbr, position } = k;
    const teamId = this.props.team.team_id;
    axios.post("/api/userPlayers", {
      id,
      name,
      teamAbbr,
      position,
      teamId
    });
    this.setState({ counter: (this.state.counter += 1) });
  };

  componentDidMount() {
    if (this.props.year == "2019") {
      axios
        .get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2019&format=json&statType=seasonProjectedStats"
        )
        .then(res => {
          this.setState({ data: res.data.players });
        })
        .catch(e => {
          console.log(e);
        });
    } else if (this.props.year == "2018") {
      axios
        .get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=1&format=json"
        )
        .then(res => {
          this.setState({ data: res.data.players });
        })
        .catch(e => {
          console.log(e);
        });
    } else if (this.props.year == "2017") {
      axios
        .get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&week=1&format=json"
        )
        .then(res => {
          this.setState({ data: res.data.players });
        })
        .catch(e => {
          console.log(e);
        });
    } else if (this.props.year == "2016") {
      axios
        .get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&week=1&format=json"
        )
        .then(res => {
          this.setState({ data: res.data.players });
        })
        .catch(e => {
          console.log(e);
        });
    }
  }

  filterForTeam = team => {
    const selectedTeamPlayers = this.state.data.filter(player => {
      return player.teamAbbr === team;
    });
    let selectQb = this.state.data.filter(player => {
      return player.teamAbbr === team && player.position === "QB";
    });
    let selectRb = this.state.data.filter(player => {
      return player.teamAbbr === team && player.position === "RB";
    });
    let selectWr = this.state.data.filter(player => {
      return player.teamAbbr === team && player.position === "WR";
    });
    let selectTe = this.state.data.filter(player => {
      return player.teamAbbr === team && player.position === "TE";
    });
    let selectK = this.state.data.filter(player => {
      return player.teamAbbr === team && player.position === "K";
    });
    this.setState({
      teamPlayers: selectedTeamPlayers,
      qb: selectQb,
      rb: selectRb,
      wr: selectWr,
      te: selectTe,
      k: selectK
    });
  };

  openPopup = () => {
    if (this.state.showPopup !== "new-popup") {
      this.setState({ showPopup: "new-popup" });
    }
  };

  closePopup = () => {
    if (this.state.showPopup === "new-popup") {
      this.setState({ showPopup: "no-popup" });
    }
  };

  render() {
    if (this.state.counter > 11) {
      return <Redirect to="/dashboard" />;
    }
    if (!this.state.data) {
      return <LoaderIcons />;
    }

    return (
      <>
        <div className="dashboard">
          <div className="logo-rapper">
            <h1 className="select">Select A Team {this.state.counter}/12</h1>
            <div className="logos">
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("NE");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/MIA/MIA_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("MIA");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/BUF/BUF_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("BUF");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/NYJ/NYJ_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("NYJ");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/BAL/BAL_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("BAL");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/PIT/PIT_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("PIT");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/CLE/CLE_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("CLE");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/CIN/CIN_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("CIN");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/HOU/HOU_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("HOU");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/IND/IND_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("IND");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("TEN");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("JAX");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("KC");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/LAC/LAC_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("LAC");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/DEN/DEN_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("DEN");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/OAK/OAK_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("OAK");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/DAL/DAL_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("DAL");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("PHI");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/WAS/WAS_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("WAS");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/NYG/NYG_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("NYG");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/CHI/CHI_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("CHI");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/MIN/MIN_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("MIN");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/GB/GB_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("GB");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/DET/DET_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("DET");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/NO/NO_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("NO");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/ATL/ATL_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("ATL");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/CAR/CAR_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("CAR");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/TB/TB_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("TB");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/LA/LA_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("LA");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/SEA/SEA_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("SEA");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/SF/SF_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("SF");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo"
                src="http://i.nflcdn.com/static/site/7.5/img/teams/ARZ/ARZ_logo-80x90.gif"
                alt="logo"
                onClick={() => {
                  this.filterForTeam("ARI");
                  this.openPopup();
                }}
              />
              <img
                className="team-logo nfl-logo"
                src="https://static.nfl.com/static/content/public/static/wildcat/assets/img/application-shell/shield/default.svg"
                alt="logo"
                onClick={() => this.filterForTeam("")}
              />
            </div>

            {/* Popup Content */}

            <div className={this.state.showPopup}>
              <div className="popup\_inner new-inner">
                <h2
                  className="player-text"
                  onClick={() => {
                    this.closePopup();
                  }}
                >
                  Close
                </h2>
                <h1 className="position-text">QBs</h1>
                {this.state.qb.map(qb => (
                  <div
                    className="player-text"
                    onClick={e => {
                      this.handleAddQb(e, qb);
                      this.closePopup();
                    }}
                  >
                    {qb.name}
                  </div>
                ))}
                <h1 className="position-text">RBs</h1>
                {this.state.rb.map(rb => (
                  <div
                    className="player-text"
                    onClick={e => {
                      this.handleAddRb(e, rb);
                      this.closePopup();
                    }}
                  >
                    {rb.name}
                  </div>
                ))}
                <h1 className="position-text">WRs</h1>
                {this.state.wr.map(wr => (
                  <div
                    className="player-text"
                    onClick={e => {
                      this.handleAddWr(e, wr);
                      this.closePopup();
                    }}
                  >
                    {wr.name}
                  </div>
                ))}
                <h1 className="position-text">TEs</h1>
                {this.state.te.map(te => (
                  <div
                    onClick={e => {
                      this.handleAddTe(e, te);
                      this.closePopup();
                    }}
                    className="player-text"
                  >
                    {te.name}
                  </div>
                ))}
                <h1 className="position-text">K</h1>
                {this.state.k.map(k => (
                  <div
                    className="player-text"
                    onClick={e => {
                      this.handleAddK(e, k);
                      this.closePopup();
                    }}
                  >
                    {k.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <CurrentTeam />
        </div>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    year: reduxState.legacy.year,
    team: reduxState.legacy.team
  };
};
export default connect(
  mapStatetoProps,
  { addQb, addRb, addWr, addTe, addK }
)(Logos);
