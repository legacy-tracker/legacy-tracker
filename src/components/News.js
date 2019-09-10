import React from "react";
import axios from "axios";
import "../styles/news.css";
import NewsTeamList from "./News/NewsTeamList.";
import NewsFormatTime from "./News/NewsFormatTime";
import LoaderNews from "./LoaderNews";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      teamAbbr: "",
      showPopup: "no-popup",
      counter: 0
    };
  }

  componentDidMount() {
    axios
      .get("https://api.fantasy.nfl.com/v1/players/news/?format=json&count=950")
      .then(res => {
        this.setState({ news: res.data.news });
      })
      .catch(e => {
        console.log(e);
      });
  }

  closePopUp = () => {
    if (this.state.showPopup === "popup") {
      this.setState({ showPopup: "no-popup" });
    }
  };

  handlePickTeamButton = () => {
    if (this.state.showPopup === "no-popup") {
      this.setState({ showPopup: "popup" });
      this.setState({ counter: this.state.counter + 1 });
    } else {
      this.setState({ showPopup: "no-popup" });
    }
    if (this.state.counter > 0) {
      axios
        .get(
          "https://api.fantasy.nfl.com/v1/players/news/?format=json&count=950"
        )
        .then(res => {
          this.setState({ news: res.data.news });
        })
        .catch(e => {
          console.log(e);
        });
    }
  };

  filterForTeam = team => {
    // this.setState({ teamAbbr: team });
    const filteredNews = this.state.news.filter(teamNews => {
      return teamNews.teamAbbr === team;
    });
    this.setState({ news: filteredNews });
    this.closePopUp();
  };

  render() {
    if (!this.state.news) {
      return <LoaderNews />;
    }
    const displayNews = this.state.news.map((newsArticle, index) => {
      //These replaces are used to properly load apostrophes, quotes, and the & symbol
      const filteredBody = newsArticle.body
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"');
      const filteredAnalysis = newsArticle.analysis
        .replace(/&apos;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"');
      const filteredHeadline = newsArticle.headline
        .replace(/&apos;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&");
      //Only renders team logo if teamAbbr is provided from axios call
      const conditionalLogo = () => {
        if (newsArticle.teamAbbr !== "") {
          return (
            <img
              src={
                "https://a.espncdn.com/i/teamlogos/nfl/500/" +
                newsArticle.teamAbbr +
                ".png"
              }
              className="small-logo"
              alt="Team Logo"
            />
          );
        } else {
          return null;
        }
      };

      return (
        <div key={newsArticle.id} className="news-text">
          <div className="news-item-top-row">
            {conditionalLogo()}
            <h3 className="news-item-headline">
              {"["}
              {newsArticle.position}
              {"]"} {newsArticle.firstName} {newsArticle.lastName}{" "}
              {filteredHeadline}
            </h3>
          </div>
          <NewsFormatTime time={newsArticle.timestamp} />
          <p>{filteredBody}</p>
          <h4 className="impact">Impact:</h4>
          <p>{filteredAnalysis}</p>
        </div>
      );
    });
    return (
      <div className="news-content">
        <button className="news-btn" onClick={this.handlePickTeamButton}>
          Filter your news
        </button>
        {/* pick team popup */}

        <div className={this.state.showPopup}>
          <div className="popup\_inner">
            <button
              className="close-button"
              onClick={this.handlePickTeamButton}
            >
              click to close
            </button>
            <NewsTeamList
              filterForTeam={this.filterForTeam}
              news={this.state.news}
            />
          </div>
        </div>

        <div className="news App">{displayNews}</div>
      </div>
    );
  }
}

export default News;
