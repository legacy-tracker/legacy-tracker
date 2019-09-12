import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "../styles/stats.css";
import StatsInput from "../components/Stats/StatsInput";
import FantasyPointsByYear from "./Stats/FantasyPointsByYear";
import RushingTDsPerYear from "./Stats/RushingTDsPerYear";
import RushingYardsPerYear from "./Stats/RushingYardsPerYear";
import PassingYardsPerYear from "./Stats/PassingYardsPerYear";
import PassingTDsPerYear from "./Stats/PassingTDsPerYear";
import PassingINTsPerYear from "./Stats/PassingINTsPerYear";
import ReceptionsPerYear from "./Stats/ReceptionsPerYear";
import ReceptionTDsPerYear from "./Stats/ReceptionTDsPerYear";
import ReceptionYardsPerYear from "./Stats/ReceptionYardsPerYear";
import PATsMadePerYear from "./Stats/PATsMadePerYear";
import FGsMade20 from "./Stats/FGsMade20-29";
import FGsMade30 from "./Stats/FGsMade30-39";
import FGsMade40 from "./Stats/FGsMade40-49";
import FGsMade50 from "./Stats/FGsMade50+";
import NewsFormatTime from "./News/NewsFormatTime";

export class Stats extends Component {
  constructor() {
    super();
    this.state = {
      s1: {},
      s2: {},
      s3: {},
      s0: {},
      input: "",
      position: "",
      name: "",
      teamAbbr: "",
      s1Pts: 0,
      s2Pts: 0,
      s3Pts: 0,
      s0Pts: 0,
      personalData: [],
      number: 0,
      news: [],
      gameStats: [],
      videos: []
    };
  }

  componentDidMount() {
    this.setState({
      input: this.props.id,
      position: this.props.playerPosition
    });
    this.handleSubmit();
    axios
      .get(
        `https://api.fantasy.nfl.com/v1/players/details?playerId=
          ${this.props.id}
          &statType=seasonStatsformat=json`
      )
      .then(res =>
        this.setState({
          personalData: res.data.players[0],
          number: res.data.players[0].jerseyNumber,
          status: res.data.players[0].status,
          news: res.data.players[0].notes,
          gameStats: res.data.players[0].weeks,
          videos: res.data.players[0].videos
        })
      );
  }

  handleIdInput = e => {
    this.setState({ input: e.target.value.toString() });
    console.log("HandleIdInput");
  };

  handleSubmit = () => {
    console.log(this.props.id);
    console.log(this.props.playerPosition);
    this.setState({
      s1: {},
      s2: {},
      s3: {},
      s0: {},
      name: "",
      s0Pts: 0,
      s1Pts: 0,
      s2Pts: 0,
      s3Pts: 0
    });
    axios
      .all([
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&format=json&position=" +
            this.props.playerPosition
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2017&format=json&position=" +
            this.props.playerPosition
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2016&format=json&position=" +
            this.props.playerPosition
        ),
        axios.get(
          "https://api.fantasy.nfl.com/v1/players/stats?statType=seasonProjectedStats&&format=json&position=" +
            this.props.playerPosition
        )
      ])
      .then(([res1, res2, res3, res4]) => {
        const s1 = res1.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const s2 = res2.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const s3 = res3.data.players.filter(player => {
          return player.id === this.state.input;
        });
        const s0 = res4.data.players.filter(player => {
          return player.id === this.state.input;
        });

        if (s1.length !== 0) {
          this.setState({ name: s1[0].name });
          this.setState({ s1: s1[0].stats });
          this.setState({ teamAbbr: s1[0].teamAbbr });
          this.setState({ s1Pts: s1[0].seasonPts });
        }
        if (s2.length !== 0) {
          this.setState({ s2: s2[0].stats });
          this.setState({ teamAbbr: s2[0].teamAbbr });
          this.setState({ s2Pts: s2[0].seasonPts });
        }
        if (s3.length !== 0) {
          this.setState({ s3: s3[0].stats });
          this.setState({ s3Pts: s3[0].seasonPts });
          this.setState({ name: s3[0].name });
        }
        if (s0.length !== 0) {
          this.setState({ s0: s0[0].stats });
          this.setState({ s0Pts: s0[0].seasonProjectedPts });
        }
      });
  };

  handleRender() {
    if (this.state.position === "QB") {
      const { s0Pts, s1Pts, s2Pts, s3Pts, s0, s1, s2, s3 } = this.state;

      return (
        <div className="chart-container">
          <FantasyPointsByYear
            stat2019={s0Pts}
            stat2018={s1Pts}
            stat2017={s2Pts}
            stat2016={s3Pts}
          />
          <PassingYardsPerYear
            stat2019={s0[5]}
            stat2018={s1[5]}
            stat2017={s2[5]}
            stat2016={s3[5]}
          />
          <PassingTDsPerYear
            stat2019={s0[6]}
            stat2018={s1[6]}
            stat2017={s2[6]}
            stat2016={s3[6]}
          />
          <PassingINTsPerYear
            stat2019={s0[7]}
            stat2018={s1[7]}
            stat2017={s2[7]}
            stat2016={s3[7]}
          />
          <RushingTDsPerYear
            stat2019={s0[15]}
            stat2018={s1[15]}
            stat2017={s2[15]}
            stat2016={s3[15]}
          />
          <RushingYardsPerYear
            stat2019={s0[14]}
            stat2018={s1[14]}
            stat2017={s2[14]}
            stat2016={s3[14]}
          />
        </div>
      );
    } else if (this.state.position === "RB") {
      const { s0Pts, s1Pts, s2Pts, s3Pts, s0, s1, s2, s3 } = this.state;

      return (
        <div className="chart-container">
          <FantasyPointsByYear
            stat2019={s0Pts}
            stat2018={s1Pts}
            stat2017={s2Pts}
            stat2016={s3Pts}
          />
          <RushingTDsPerYear
            stat2019={s0[15]}
            stat2018={s1[15]}
            stat2017={s2[15]}
            stat2016={s3[15]}
          />
          <RushingYardsPerYear
            stat2019={s0[14]}
            stat2018={s1[14]}
            stat2017={s2[14]}
            stat2016={s3[14]}
          />
          <ReceptionsPerYear
            stat2019={s0[20]}
            stat2018={s1[20]}
            stat2017={s2[20]}
            stat2016={s3[20]}
          />
          <ReceptionTDsPerYear
            stat2019={s0[22]}
            stat2018={s1[22]}
            stat2017={s2[22]}
            stat2016={s3[22]}
          />
          <ReceptionYardsPerYear
            stat2019={s0[21]}
            stat2018={s1[21]}
            stat2017={s2[21]}
            stat2016={s3[21]}
          />
        </div>
      );
    } else if (this.state.position === "WR") {
      const { s0Pts, s1Pts, s2Pts, s3Pts, s0, s1, s2, s3 } = this.state;

      return (
        <div className="chart-container">
          <FantasyPointsByYear
            stat2019={s0Pts}
            stat2018={s1Pts}
            stat2017={s2Pts}
            stat2016={s3Pts}
          />
          <ReceptionsPerYear
            stat2019={s0[20]}
            stat2018={s1[20]}
            stat2017={s2[20]}
            stat2016={s3[20]}
          />
          <ReceptionTDsPerYear
            stat2019={s0[22]}
            stat2018={s1[22]}
            stat2017={s2[22]}
            stat2016={s3[22]}
          />
          <ReceptionYardsPerYear
            stat2019={s0[21]}
            stat2018={s1[21]}
            stat2017={s2[21]}
            stat2016={s3[21]}
          />
        </div>
      );
    } else if (this.state.position === "TE") {
      const { s0Pts, s1Pts, s2Pts, s3Pts, s0, s1, s2, s3 } = this.state;

      return (
        <div className="chart-container">
          <FantasyPointsByYear
            stat2019={s0Pts}
            stat2018={s1Pts}
            stat2017={s2Pts}
            stat2016={s3Pts}
          />
          <ReceptionsPerYear
            stat2019={s0[20]}
            stat2018={s1[20]}
            stat2017={s2[20]}
            stat2016={s3[20]}
          />
          <ReceptionTDsPerYear
            stat2019={s0[22]}
            stat2018={s1[22]}
            stat2017={s2[22]}
            stat2016={s3[22]}
          />
          <ReceptionYardsPerYear
            stat2019={s0[21]}
            stat2018={s1[21]}
            stat2017={s2[21]}
            stat2016={s3[21]}
          />
        </div>
      );
    } else if (this.state.position === "K") {
      const { s0Pts, s1Pts, s2Pts, s3Pts, s0, s1, s2, s3 } = this.state;

      return (
        <div className="chart-container">
          <FantasyPointsByYear
            stat2019={s0Pts}
            stat2018={s1Pts}
            stat2017={s2Pts}
            stat2016={s3Pts}
          />
          <PATsMadePerYear
            stat2019={s0[33]}
            stat2018={s1[33]}
            stat2017={s2[33]}
            stat2016={s3[33]}
          />
          <FGsMade20
            stat2019={s0[36]}
            stat2018={s1[36]}
            stat2017={s2[36]}
            stat2016={s3[36]}
          />
          <FGsMade30
            stat2019={s0[37]}
            stat2018={s1[37]}
            stat2017={s2[37]}
            stat2016={s3[37]}
          />
          <FGsMade40
            stat2019={s0[38]}
            stat2018={s1[38]}
            stat2017={s2[38]}
            stat2016={s3[38]}
          />
          <FGsMade50
            stat2019={s0[39]}
            stat2018={s1[39]}
            stat2017={s2[39]}
            stat2016={s3[39]}
          />
        </div>
      );
    } else return <h1>Error</h1>;
  }

  render() {
    console.log(this.state.personalData);
    const { s1, s2, s3, s0 } = this.state;
    const news = this.state.news.map(newsItem => {
      const filteredAnalysis = newsItem.analysis
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"');
      return (
        <div className="news-text" key={newsItem.id}>
          <h3 classname="news-item-headline">
            {this.state.name} {newsItem.headline}
          </h3>
          <NewsFormatTime time={newsItem.timestamp} />
          <p>{filteredAnalysis}</p>
        </div>
      );
    });

    const gameStats = this.state.gameStats.map(game => {
      if (game.gameResult !== false) {
        const { stats } = game;
        return (
          <div key={game.id}>
            <h3>
              Week {game.id} Opponent: {game.opponent} result: {game.gameResult}{" "}
              - {game.gameDate}
            </h3>
            {stats[442] === undefined ? null : <h3>Attempts: {stats[2]} </h3>}
            {stats[3] === undefined ? null : <h3>Completions: {stats[3]}</h3>}
            {stats[5] === undefined ? null : <h3>Yards: {stats[5]}</h3>}
            {stats[6] === undefined ? null : <h3>TD's: {stats[6]}</h3>}
            {stats[7] === undefined ? null : <h3>INT: {stats[7]}</h3>}
            {stats[13] === undefined ? null : (
              <h3>Rush Attempts: {stats[13]}</h3>
            )}
            {stats[14] === undefined ? null : <h3>Rush Yards: {stats[14]}</h3>}
            {stats[15] === undefined ? null : <h3>Rush TD's: {stats[15]}</h3>}
            {stats[31] === undefined ? null : <h3>Fumbles: {stats[31]}</h3>}
            {stats[20] === undefined ? null : <h3>Receptions {stats[20]}</h3>}
            {stats[21] === undefined ? null : (
              <h3>Recieving Yards: {stats[21]}</h3>
            )}
            {stats[22] === undefined ? null : (
              <h3>Recieving TD's: {stats[22]}</h3>
            )}
            {stats[33] === undefined ? null : <h3>PAT's Made:{stats[33]}</h3>}
            {stats[34] === undefined ? null : (
              <h3>PAT's Missed: {stats[34]}</h3>
            )}
            {stats[35] === undefined ? null : (
              <h3>0 - 19 Yards Made: {stats[35]}</h3>
            )}
            {stats[40] === undefined ? null : (
              <h3>0 - 19 Yards Missed: {stats[40]}</h3>
            )}
            {stats[41] === undefined ? null : (
              <h3>20 - 29 Yards Made: {stats[41]}</h3>
            )}
            {stats[36] === undefined ? null : (
              <h3>20 - 29 Yards Missed: {stats[36]}</h3>
            )}
            {stats[37] === undefined ? null : (
              <h3>30 - 39 Yards Made:{stats[37]}</h3>
            )}
            {stats[38] === undefined ? null : (
              <h3>30 - 39 Yards Missed:{stats[38]}</h3>
            )}
            {stats[42] === undefined ? null : (
              <h3>40 - 49 Yards Made:{stats[42]}</h3>
            )}
            {stats[43] === undefined ? null : (
              <h3>40 - 49 Yards Missed:{stats[43]}</h3>
            )}
            {stats[39] === undefined ? null : (
              <h3>50+ Yards Made:{stats[39]}</h3>
            )}
            {stats[44] === undefined ? null : (
              <h3>50+ Yards Missed:{stats[44]}</h3>
            )}
          </div>
        );
      } else {
        return (
          <div>
            <h3>
              Week {game.id} Opponent:{" "}
              {game.opponent === false ? (
                <h3>BYE</h3>
              ) : (
                <h3>{game.opponent}</h3>
              )}{" "}
            </h3>
            {game.gameDate}
          </div>
        );
      }
    });

    const videos = this.state.videos.map(video => {
      return (
        <div className="video-container">
          <a
            target="_blank"
            href={`http://www.nfl.com/videos/nfl-game-highlights/${video.id}`}
          >
            <img
              className="video-thumbnail"
              src={video.mediumPhotoUrl}
              href={`http://www.nfl.com/videos/nfl-game-highlights/${video.id}`}
              target="_blank"
            />
          </a>
          <div className="video-text">
            <h3>
              {video.title} {video.gameClock}
            </h3>

            <p>{video.description}</p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <h1>
          [{this.state.teamAbbr}] {this.state.name} [{this.state.position}] #
          {this.state.number}
        </h1>
        <h2>Status: {this.state.status}</h2>
        {gameStats}
        <div className="videos">{videos}</div>
        {/* News */}
        <div className="news-player">{news}</div>
        {/* News End */}
        {/* current season stats */}

        <div className=""></div>

        {/* current season stats end */}

        {this.handleRender()}
        <div className="season-stats">
          <div>
            <h3>2019(Projections): {this.state.s0Pts} points</h3>
            <h5>Games Played: {s0[1]}</h5>
            <h5>Passing Attempts: {s0[2]}</h5>
            <h5>Completions: {s0[3]}</h5>
            <h5>Completion Rate: {Math.ceil(1000 * (s0[3] / s0[2])) / 10}%</h5>
            <h5>Passing Yards: {s0[5]}</h5>
            <h5>TD's: {s0[6]}</h5>
            <h5>INT: {s0[7]}</h5>
            <h5>{(s0[6] / s0[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {s0[13]}</h5>
            <h5>Rush Yards: {s0[14]}</h5>
            <h5>
              Rush Yards / Attempt {Math.ceil(100 * (s0[14] / s0[13])) / 100}
            </h5>
            <h5>Rush TD's: {s0[15]}</h5>
            <h5>Fumbles: {s0[31]}</h5>
            <h5>Receptions: {s0[20]}</h5>
            <h5>Receiving Yards: {s0[21]}</h5>
            <h5>
              Yards / Reception {Math.ceil(100 * (s0[21] / s0[20])) / 100}
            </h5>
            <h5>Receiving TD's: {s0[22]}</h5>
          </div>

          <div>
            <h3>2018: {this.state.s1Pts} points</h3>
            <h5>Games Played: {s1[1]}</h5>
            <h5>Passing Attempts: {s1[2]}</h5>
            <h5>Completions: {s1[3]}</h5>
            <h5>Completion Rate: {Math.ceil(1000 * (s1[3] / s1[2])) / 10}%</h5>
            <h5>Passing Yards: {s1[5]}</h5>
            <h5>TD's: {s1[6]}</h5>
            <h5>INT: {s1[7]}</h5>
            <h5>{(s1[6] / s1[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {s1[13]}</h5>
            <h5>Rush Yards: {s1[14]}</h5>
            <h5>
              Rush Yards / Attempt {Math.ceil(100 * (s1[14] / s1[13])) / 100}
            </h5>
            <h5>Rush TD's: {s1[15]}</h5>
            <h5>Fumbles: {s1[31]}</h5>
            <h5>Receptions: {s1[20]}</h5>
            <h5>Receiving Yards: {s1[21]}</h5>
            <h5>
              Yards / Reception {Math.ceil(100 * (s1[21] / s1[20])) / 100}
            </h5>
            <h5>Receiving TD's: {s1[22]}</h5>
          </div>
          <div>
            <h3>2017: {this.state.s2Pts} points</h3>
            <h5>Games Played: {s2[1]}</h5>
            <h5>Passing Attempts: {s2[2]}</h5>
            <h5>Completions: {s2[3]}</h5>
            <h5>Completion Rate: {Math.ceil(1000 * (s2[3] / s2[2])) / 10}%</h5>
            <h5>Passing Yards: {s2[5]}</h5>
            <h5>TD's: {s2[6]}</h5>
            <h5>INT: {s2[7]}</h5>
            <h5>{(s2[6] / s2[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {s2[13]}</h5>
            <h5>Rush Yards: {s2[14]}</h5>
            <h5>
              Rush Yards / Attempt {Math.ceil(100 * (s2[14] / s2[13])) / 100}
            </h5>
            <h5>Rush TD's: {s2[15]}</h5>
            <h5>Fumbles: {s2[31]}</h5>
            <h5>Receptions: {s2[20]}</h5>
            <h5>Receiving Yards: {s2[21]}</h5>
            <h5>
              Yards / Reception {Math.ceil(100 * (s2[21] / s2[20])) / 100}
            </h5>
            <h5>Receiving TD's: {s2[22]}</h5>
          </div>
          <div>
            <h3>2016: {this.state.s3Pts} points</h3>
            <h5>Games Played: {s3[1]}</h5>
            <h5>Passing Attempts: {s3[2]}</h5>
            <h5>Completions: {s3[3]}</h5>
            <h5>Completion Rate: {Math.ceil(1000 * (s3[3] / s3[2])) / 10}%</h5>
            <h5>Passing Yards: {s3[5]}</h5>
            <h5>TD's: {s3[6]}</h5>
            <h5>INT: {s3[7]}</h5>
            <h5>{(s3[6] / s3[7]).toFixed(2)} TD / INT</h5>
            <h5>Rush Attempts: {s3[13]}</h5>
            <h5>Rush Yards: {s3[14]}</h5>
            <h5>
              Rush Yards / Attempt {Math.ceil(100 * (s3[14] / s3[13])) / 100}
            </h5>
            <h5>Rush TD's: {s3[15]}</h5>
            <h5>Fumbles: {s3[31]}</h5>
            <h5>Receptions: {s3[20]}</h5>
            <h5>Receiving Yards: {s3[21]}</h5>
            <h5>
              Yards / Reception {Math.ceil(100 * (s3[21] / s3[20])) / 100}
            </h5>
            <h5>Receiving TD's: {s3[22]}</h5>
          </div>
        </div>
      </div>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    id: reduxState.players.id,
    playerPosition: reduxState.players.playerPosition
  };
};

export default connect(mapStatetoProps)(Stats);
