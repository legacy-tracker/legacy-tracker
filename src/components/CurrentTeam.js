import React from "react";
import { connect } from "react-redux";
import "../styles/logos.css";

class CurrentTeam extends React.Component {
  // constructor(){
  //     super()
  //     this.state={

  //     }
  // }

  render() {
    console.log(this.props);
    return (
      <div className="current-team">
        <h1>{this.props.year}</h1>
        <h1>{this.props.name}</h1>
        <h1>QB</h1>{" "}
        {this.props.qb.map(qb => (
          <h2>{qb.name}</h2>
        ))}
        <h1>RB</h1>{" "}
        {this.props.rb.map(qb => (
          <h2>{qb.name}</h2>
        ))}
        <h1>WR</h1>{" "}
        {this.props.wr.map(qb => (
          <h2>{qb.name}</h2>
        ))}
        <h1>TE</h1>{" "}
        {this.props.te.map(qb => (
          <h2>{qb.name}</h2>
        ))}
        <h1>K</h1>{" "}
        {this.props.k.map(qb => (
          <h2>{qb.name}</h2>
        ))}
      </div>
    );
  }
}
let mapStatetoProps = reduxState => {
  return {
    name: reduxState.legacy.name,
    year: reduxState.legacy.year,
    qb: reduxState.legacy.qb,
    rb: reduxState.legacy.rb,
    wr: reduxState.legacy.wr,
    te: reduxState.legacy.te,
    k: reduxState.legacy.k
  };
};
export default connect(mapStatetoProps)(CurrentTeam);
