import React from "react";
import "../styles/logos.css";
import "../styles/dashboard.css";
import LegacyTeamList from "./LegacyTeamList";
import SideMenu from "./SideMenu";
import axios from "axios";
import { connect } from "react-redux";

class Logos extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentTeam: "",
      teamPlayers: [],
      qb: [],
      rb: [],
      wr: [],
      te: [],
      k: []
    };
  }

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
  render() {
    console.log(this.props.year);
    console.log(this.state.data);

    return (
      <div className="dashboard">
        <LegacyTeamList />
        <div className="logo-rapper">
          <h1>Select A Team</h1>
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("NE")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/MIA/MIA_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("MIA")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/BUF/BUF_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("BUF")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/NYJ/NYJ_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("NYJ")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/BAL/BAL_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("BAL")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/PIT/PIT_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("PIT")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/CLE/CLE_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("CLE")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/CIN/CIN_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("CIN")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/HOU/HOU_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("HOU")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/IND/IND_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("IND")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("TEN")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("JAX")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("KC")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/LAC/LAC_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("LAC")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/DEN/DEN_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("DEN")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/OAK/OAK_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("OAK")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/DAL/DAL_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("DAL")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("PHI")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/WAS/WAS_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("WAS")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/NYG/NYG_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("NYG")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/CHI/CHI_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("CHI")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/MIN/MIN_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("MIN")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/GB/GB_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("GB")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/DET/DET_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("DET")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/NO/NO_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("NO")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/ATL/ATL_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("ATL")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/CAR/CAR_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("CAR")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/TB/TB_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("TB")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/LA/LA_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("LA")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/SEA/SEA_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("SEA")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/SF/SF_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("SF")}
          />
          <img
            src="http://i.nflcdn.com/static/site/7.5/img/teams/ARZ/ARZ_logo-80x90.gif"
            alt="logo"
            onClick={() => this.filterForTeam("ARI")}
          />
          <img
            src="https://static.nfl.com/static/content/public/static/wildcat/assets/img/application-shell/shield/default.svg"
            alt="logg"
            onClick={() => this.filterForTeam("")}
          />
          <h1>QBs</h1>
          {this.state.qb.map(qb => (
            <>
              <li>{qb.name}</li>
              <button>Add</button>
            </>
          ))}
          <h1>RBs</h1>
          {this.state.rb.map(rb => (
            <>
              <li>{rb.name}</li>
              <button>Add</button>
            </>
          ))}
          <h1>WRs</h1>
          {this.state.wr.map(wr => (
            <>
              <li>{wr.name}</li>
              <button>Add</button>
            </>
          ))}
          <h1>TEs</h1>
          {this.state.te.map(te => (
            <>
              <li>{te.name}</li>
              <button>Add</button>
            </>
          ))}
          <h1>K</h1>
          {this.state.k.map(k => (
            <>
              <li>{k.name}</li>
              <button>Add</button>
            </>
          ))}
        </div>
        <SideMenu />
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    year: reduxState.legacy.year
  };
};
export default connect(mapStatetoProps)(Logos);
