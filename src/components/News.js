import React from "react";
import axios from "axios";
import "../styles/news.css";
class News extends React.Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.fantasy.nfl.com/v1/players/news/?format=json")
      .then(res => {
        this.setState({ news: res.data.news });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
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
      // const filteredTeamAbbr = newsArticle.teamAbbr.replace(/LA/g, "LAR");s
      //Only renders team logo if teamAbbr is provided from axios call
      const conditionalLogo = () => {
        if (newsArticle.teamAbbr !== "") {
          return (
            <img
              src={
                "https://a.espncdn.com/i/teamlogos/nfl/500/" +
                // filteredTeamAbbr +
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
          <h4 className="news-item-time">Time: {newsArticle.timestamp}</h4>
          <p>{filteredBody}</p>
          <h4 className="impact">Impact:</h4>
          <p>{filteredAnalysis}</p>
        </div>
      );
    });
    return <div className="news App">{displayNews}</div>;
  }
}

export default News;
