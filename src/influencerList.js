import React, { Component } from 'react';
import InfluencerItem from './influencerItem'
import config from "./config";

class InfluencerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          influencers: [],
          influencerinfo: [],
        };
        this.ref = config.ref("Influencers");
    }

    componentWillReceiveProps(nextProps) {
      this.ref.on("value", (snapShot) => {
        let dataa = snapShot.val();
        console.log(dataa);
        let data = Object.values(Object.values(dataa).map((e) => e.Profil))
          .map((e) => Object.values(e))
          // .filter((b) => b[0] === nextProps.affiliateId)[0];
        console.log(data);
        this.setState({
          influencerinfo: [...data],
        });
      });
    }


    render() { 
        const {influencers}=this.props
        console.log(influencers)
        return ( <div className='contact-list-container'>
        <center>
        <h1>Influencer List</h1>
        <div className='contact-list-container1'>
        {
            influencers.map((el,index)=><InfluencerItem aff={this.state.influencerinfo} item={el} key={index}/>)
        }       
        </div>
        </center>   
        </div> );
    }
}



 
export default (InfluencerList);