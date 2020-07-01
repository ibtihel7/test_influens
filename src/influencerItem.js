import React, { Component } from "react";
import config from "./config";

class Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      influencers: [],
    };
    this.ref = config.ref("Influencers");
  }

  componentWillReceiveProps(nextProps) {
    this.ref.on("value", (snapShot) => {
      let dataa = snapShot.val();
      console.log(dataa);
      let data = Object.values(Object.values(dataa).map((e) => e.Profil))
        .map((e) => Object.values(e))
        .filter((b) => b[0] === nextProps.affiliateId)[0];
      console.log(data);
      this.setState({
        influencers: [...data],
      });
    });
  }

  render() {
    // const influencersList = Object.keys(this.state.influencers).map(key=>{
    //     return <div><p key = {key}> {this.state.influencers[key].Profil.name}</p>
    //     <p key = {key}> {this.state.influencers[key].Profil.email}</p>
    //      <img src= {this.state.influencers[key].Profil.banner} />
    //     <br/>   <br/>
    //     </div>
    //   })
    return (
      <div>
        <ul>
          <li>  inf<img src={this.state.influencers[1]}/> </li>
          <li>{this.state.influencers[5]}</li>
          <li>
            <h2>{this.state.influencers[4]}</h2>
          </li>
          <li> {this.props.salesInflu} </li>   
          <li> {this.props.commissionInflu} </li> 
     <li> {this.props.amountInflu} </li>   
        </ul>
      </div>
    );
  }
}

export default Influencer;
