import React, { Component } from "react";

class Influencer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      influencers: [],
    };
  }

  componentDidMount() {
    let data = this.props.aff.filter((b) => b[0] === this.props.item);
    this.setState({
      influencers: [...data],
    });
  }

  componentWillReceiveProps(nextProps) {
    let data = nextProps.aff.filter((b) => b[0] === nextProps.item)[0];

    this.setState({
      affilId: data[0],
      pic: data[2],
      name: data[7],
      email: data[6],
    });
  }

  render() {
    const { item } = this.props;

    return (
      <div className="contactItemContainer">
        <h4> Influencer with affiliate Id {item}</h4>
        <div className="listContainer">
          <img className="picture" src={this.state.pic} />
          <ul>
            {/* <li>{this.state.affilId}</li> */}
            <li>
              {" "}
              <h5>{this.state.name}</h5>
            </li>
            <li>
              <h5>{this.state.email}</h5>
            </li>

            {/* <li> {this.props.salesInflu} </li>   
          <li> {this.props.commissionInflu} </li> 
     <li> {this.props.amountInflu} </li>    */}
          </ul>
        </div>
      </div>
    );
  }
}

export default Influencer;
