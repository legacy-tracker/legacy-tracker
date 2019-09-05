import React from "react";
import { connect } from "react-redux";

class CurrentTeam extends React.Component {
  // constructor(){
  //     super()
  //     this.state={

  //     }
  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.year}</h1>
        <h1>{this.props.name}</h1>
        <h1>QB</h1> <li>{this.props.qb}</li>
        <h1>RB</h1> <li>{this.props.rb}</li>
        <h1>WR</h1> <li>{this.props.wr}</li>
        <h1>TE</h1> <li>{this.props.te}</li>
        <h1>K</h1> <li>{this.props.k}</li>
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
