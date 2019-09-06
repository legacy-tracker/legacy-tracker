import React, { Component } from "react";
import axios from "axios";
import "../styles/stats.css";
import StatsInput from "../components/Stats/StatsInput";
import FantasyPointsByYear from "./Stats/FantasyPointsByYear";
import RushingYardsPerYear from "./Stats/RB";
export class Stats extends Component {
  constructor() {
    super();
    this.state = {
      season1: {},
      season2: {},
      season3: {},
      season0: {},
      input: "2506363",
      position: "QB",
      name: "",
      teamAbbr: "",
      season1Pts: 0,
      season2Pts: 0,
      season3Pts: 0,
      season0Pts: 0
    };
  }

  handleIdInput = e => {
    this.setState({ input: e.target.value.toString() });
    console.log("HandleIdInput");
  };

  handleSubmit = () => {
    this.setState({
      season1: {},
      season2: {},
      season3: {},
      season0: {},
      name: "",
      season0Pts: 0,
      season1Pts: 0,
      season2Pts: 0,
      season3Pts: 0
    });
    axios
      .all([
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=" +
            this.state.position
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&format=json&position=" +
            this.state.position
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&format=json&position=" +
            this.state.position
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonProjectedStats&&format=json&position=" +
            this.state.position
        )
      ])
      .then(([res1, res2, res3, res4]) => {
        const season1 = res1.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const season2 = res2.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const season3 = res3.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const season0 = res4.data.players.filter(player => {
          return player.id === this.state.input;
        });

        if (season1.length !== 0) {
          this.setState({ name: season1[0].name });
          this.setState({ season1: season1[0].stats });
          this.setState({ teamAbbr: season1[0].teamAbbr });
          this.setState({ season1Pts: season1[0].seasonPts });
        }
        if (season2.length !== 0) {
          this.setState({ season2: season2[0].stats });
          this.setState({ teamAbbr: season2[0].teamAbbr });
          this.setState({ season2Pts: season2[0].seasonPts });
        }
        if (season3.length !== 0) {
          this.setState({ season3: season3[0].stats });
          this.setState({ season3Pts: season3[0].seasonPts });
          this.setState({ name: season3[0].name });
        }
        if (season0.length !== 0) {
          this.setState({ season0: season0[0].stats });
          this.setState({ season0Pts: season0[0].seasonProjectedPts });
        }
      });
  };

  handleSelect = e => {
    this.setState({ position: e.target.value });
    console.log("HandleSelect");
  };

  handleRender() {
    if (this.state.position === "QB") {
      return (
        <div>
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
        </div>
      );
    } else if (this.state.position === "RB") {
      return (
        <div>
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
        </div>
      );
    } else if (this.state.position === "WR") {
      return (
        <div>
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
        </div>
      );
    } else if (this.state.position === "TE") {
      return (
        <div>
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
        </div>
      );
    } else if (this.state.position === "K") {
      return (
        <div>
          <FantasyPointsByYear
            stat2019={this.state.season0Pts}
            stat2018={this.state.season1Pts}
            stat2017={this.state.season2Pts}
            stat2016={this.state.season3Pts}
          />
        </div>
      );
    } else return <h1>Error</h1>;
  }

  render() {
    const { season1, season2, season3, season0 } = this.state;
    return (
      <div>
        {this.handleRender()}
        <StatsInput
          handleIdInput={this.handleIdInput}
          handleSelect={this.handleSelect}
          handleSubmit={this.handleSubmit}
        />
        <h1>
          {this.state.name} [{this.state.teamAbbr}]
        </h1>
        <div className="season-stats">
          <div>
            <h3>2019(Projections): {this.state.season0Pts} points</h3>
            <h5>Games Played: {season0[1]}</h5>
            <h5>Passing Attempts: {season0[2]}</h5>
            <h5>Completions: {season0[3]}</h5>
            <h5>
              Completion Rate:{" "}
              {Math.ceil(1000 * (season0[3] / season0[2])) / 10}%
            </h5>
            <h5>Passing Yards: {season0[5]}</h5>
            <h5>TD's: {season0[6]}</h5>
            <h5>INT: {season0[7]}</h5>
            <h5>{(season0[6] / season0[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {season0[13]}</h5>
            <h5>Rush Yards: {season0[14]}</h5>
            <h5>
              Rush Yards / Attempt{" "}
              {Math.ceil(100 * (season0[14] / season0[13])) / 100}
            </h5>
            <h5>Rush TD's: {season0[15]}</h5>
            <h5>Fumbles: {season0[31]}</h5>
            <h5>Receptions: {season0[20]}</h5>
            <h5>Receiving Yards: {season0[21]}</h5>
            <h5>
              Yards / Reception{" "}
              {Math.ceil(100 * (season0[21] / season0[20])) / 100}
            </h5>
            <h5>Receiving TD's: {season0[22]}</h5>
          </div>

          <div>
            <h3>2018: {this.state.season1Pts} points</h3>
            <h5>Games Played: {season1[1]}</h5>
            <h5>Passing Attempts: {season1[2]}</h5>
            <h5>Completions: {season1[3]}</h5>
            <h5>
              Completion Rate:{" "}
              {Math.ceil(1000 * (season1[3] / season1[2])) / 10}%
            </h5>
            <h5>Passing Yards: {season1[5]}</h5>
            <h5>TD's: {season1[6]}</h5>
            <h5>INT: {season1[7]}</h5>
            <h5>{(season1[6] / season1[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {season1[13]}</h5>
            <h5>Rush Yards: {season1[14]}</h5>
            <h5>
              Rush Yards / Attempt{" "}
              {Math.ceil(100 * (season1[14] / season1[13])) / 100}
            </h5>
            <h5>Rush TD's: {season1[15]}</h5>
            <h5>Fumbles: {season1[31]}</h5>
            <h5>Receptions: {season1[20]}</h5>
            <h5>Receiving Yards: {season1[21]}</h5>
            <h5>
              Yards / Reception{" "}
              {Math.ceil(100 * (season1[21] / season1[20])) / 100}
            </h5>
            <h5>Receiving TD's: {season1[22]}</h5>
          </div>
          <div>
            <h3>2017: {this.state.season2Pts} points</h3>
            <h5>Games Played: {season2[1]}</h5>
            <h5>Passing Attempts: {season2[2]}</h5>
            <h5>Completions: {season2[3]}</h5>
            <h5>
              Completion Rate:{" "}
              {Math.ceil(1000 * (season2[3] / season2[2])) / 10}%
            </h5>
            <h5>Passing Yards: {season2[5]}</h5>
            <h5>TD's: {season2[6]}</h5>
            <h5>INT: {season2[7]}</h5>
            <h5>{(season2[6] / season2[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {season2[13]}</h5>
            <h5>Rush Yards: {season2[14]}</h5>
            <h5>
              Rush Yards / Attempt{" "}
              {Math.ceil(100 * (season2[14] / season2[13])) / 100}
            </h5>
            <h5>Rush TD's: {season2[15]}</h5>
            <h5>Fumbles: {season2[31]}</h5>
            <h5>Receptions: {season2[20]}</h5>
            <h5>Receiving Yards: {season2[21]}</h5>
            <h5>
              Yards / Reception{" "}
              {Math.ceil(100 * (season2[21] / season2[20])) / 100}
            </h5>
            <h5>Receiving TD's: {season2[22]}</h5>
          </div>
          <div>
            <h3>2016: {this.state.season3Pts} points</h3>
            <h5>Games Played: {season3[1]}</h5>
            <h5>Passing Attempts: {season3[2]}</h5>
            <h5>Completions: {season3[3]}</h5>
            <h5>
              Completion Rate:{" "}
              {Math.ceil(1000 * (season3[3] / season3[2])) / 10}%
            </h5>
            <h5>Passing Yards: {season3[5]}</h5>
            <h5>TD's: {season3[6]}</h5>
            <h5>INT: {season3[7]}</h5>
            <h5>{(season3[6] / season3[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {season3[13]}</h5>
            <h5>Rush Yards: {season3[14]}</h5>
            <h5>
              Rush Yards / Attempt{" "}
              {Math.ceil(100 * (season3[14] / season3[13])) / 100}
            </h5>
            <h5>Rush TD's: {season3[15]}</h5>
            <h5>Fumbles: {season3[31]}</h5>
            <h5>Receptions: {season3[20]}</h5>
            <h5>Receiving Yards: {season3[21]}</h5>
            <h5>
              Yards / Reception{" "}
              {Math.ceil(100 * (season3[21] / season3[20])) / 100}
            </h5>
            <h5>Receiving TD's: {season3[22]}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
