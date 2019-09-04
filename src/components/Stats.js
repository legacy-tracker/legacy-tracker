import React, { Component } from "react";
import axios from "axios";
import "../styles/stats.css";
import StatsInput from "../components/Stats/StatsInput";

export class Stats extends Component {
  constructor() {
    super();
    this.state = {
      season1: {},
      season2: {},
      season3: {},
      input: "2506363",
      position: "QB"
    };
  }

  handleIdInput = e => {
    this.setState({ input: e.target.value.toString() });
    console.log("HandleIdInput");
  };

  handleSubmit = () => {
    this.setState({ season1: {}, season2: {}, season3: {} });
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
        )
      ])
      .then(([res1, res2, res3]) => {
        const season1 = res1.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const season2 = res2.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const season3 = res3.data.players.filter(player => {
          return player.id === this.state.input;
        });
        if (season1.length !== 0) {
          this.setState({ season1: season1[0].stats });
        }
        if (season2.length !== 0) {
          this.setState({ season2: season2[0].stats });
        }
        if (season3.length !== 0) {
          this.setState({ season3: season3[0].stats });
        }
        console.log("HandleSubmit");
      });
  };

  handleSelect = e => {
    this.setState({ position: e.target.value });
    console.log("HandleSelect");
  };

  render() {
    const { season1, season2, season3 } = this.state;
    return (
      <div>
        <StatsInput
          handleIdInput={this.handleIdInput}
          handleSelect={this.handleSelect}
          handleSubmit={this.handleSubmit}
        />
        <div className="season-stats">
          <div>
            <h1>2018:</h1>
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
            <h5>Rush TD's: {season1[15]}</h5>
            <h5>Fumbles: {season1[31]}</h5>
          </div>
          <div>
            <h1>2017:</h1>
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
            <h5>{(season2[6] / season2[7]).toFixed(4)} TD / INT</h5>
            <h5>Rush Attempts: {season2[13]}</h5>
            <h5>Rush Yards: {season2[14]}</h5>
            <h5>Rush TD's: {season2[15]}</h5>
            <h5>Fumbles: {season2[31]}</h5>
          </div>
          <div>
            <h1>2016:</h1>
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
            <h5>Rush TD's: {season3[15]}</h5>
            <h5>Fumbles: {season3[31]}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
