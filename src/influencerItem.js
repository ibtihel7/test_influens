import React, { Component } from "react";
import config from "./config";

class Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      influencers: [],
    };
    // this.ref.onthis.ref.on("value", (snapShot) => {
    //   let dataa = snapShot.val();
    // })
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.aff.filter((b) => b[0] === nextProps.item);
    console.log(data);

    this.setState({
      influencers: [...data],
    });
  }

  render() {
    const { item } = this.props;
    console.log(this.state.influencers);

    return (
      <div>
        {" "}
        Influencer {item}
        <ul>
          <li>{this.state.influencers[0]}</li>

          <li>
            {" "}
            inf <img src={this.state.influencers[2]} />{" "}
          </li>
          <li>{this.state.influencers[5]}</li>
          <li>
            <h2>{this.state.influencers[4]}</h2>
          </li>
          {/* <li> {this.props.salesInflu} </li>   
          <li> {this.props.commissionInflu} </li> 
     <li> {this.props.amountInflu} </li>    */}
        </ul>
      </div>
    );
  }
}

export default Influencer;
