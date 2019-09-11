import React from "react";

export default function NewsTeamList(props) {
  if (props.news[0] === undefined) {
    return <h1 className="loading">loading...</h1>;
  }

  return (
    <div>
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("NE");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/MIA/MIA_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("MIA");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/BUF/BUF_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("BUF");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/NYJ/NYJ_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("NYJ");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/BAL/BAL_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("BAL");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/PIT/PIT_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("PIT");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/CLE/CLE_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("CLE");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/CIN/CIN_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("CIN");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/HOU/HOU_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("HOU");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/IND/IND_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("IND");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/TEN/TEN_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("TEN");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/JAX/JAX_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("JAX");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/KC/KC_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("KC");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/LAC/LAC_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("LAC");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/DEN/DEN_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("DEN");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/OAK/OAK_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("OAK");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/DAL/DAL_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("DAL");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/PHI/PHI_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("PHI");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/WAS/WAS_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("WAS");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/NYG/NYG_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("NYG");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/CHI/CHI_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("CHI");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/MIN/MIN_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("MIN");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/GB/GB_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("GB");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/DET/DET_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("DET");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/NO/NO_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("NO");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/ATL/ATL_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("ATL");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/CAR/CAR_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("CAR");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/TB/TB_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("TB");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/LA/LA_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("LA");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/SEA/SEA_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("SEA");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/SF/SF_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("SF");
        }}
      />
      <img
        className="team-logo"
        src="http://i.nflcdn.com/static/site/7.5/img/teams/ARZ/ARZ_logo-80x90.gif"
        alt="logo"
        onClick={() => {
          props.filterForTeam("ARI");
        }}
      />
    </div>
  );
}
