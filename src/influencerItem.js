import React , {Component}from 'react'
import config from './config' 
import { Link } from 'react-router-dom'

class Influencer extends Component {
    constructor (props){
        super (props) ;

        this.state ={
            influencers: []
        }}
      

    componentDidMount() {
      // const kaffiliateId = this.props.kaffiliateId
  
        const ref = config.ref('Influencers')
        ref.on('value', snapShot => {
          let dataa = snapShot.val() ;
          console.log(dataa)
          let data = Object.values(Object.values(dataa).map(e=>e.Profil)).map(e=> Object.values(e)).filter(e=>e[0]===818)[0]




          // .filter(b => b[0] === parseInt(this.props.affiliateId)))
         
          // let data = Object.values(Object.values (dataa).filter(b => b.offerId === parseInt(this.props.offerId)))[0]

          // console.log(data)
          this.setState({
            influencers: [...data]

          });
        });

      }  
      
      render (){
      
      
      
     
// const influencersList = Object.keys(this.state.influencers).map(key=>{
//     return <div><p key = {key}> {this.state.influencers[key].Profil.name}</p>
//     <p key = {key}> {this.state.influencers[key].Profil.email}</p>
//      <img src= {this.state.influencers[key].Profil.banner} />
//     <br/>   <br/>
//     </div>
//   })
    return (
      <div >
        {/* {influencersList} */}
        hiiii
        <ul>

          <li>{this.state.influencers[0]}</li>
          <li>{this.state.influencers[6]}</li>
          <li><h2>{this.state.influencers[7]}</h2></li>

          <li> <img src= {this.state.influencers[2]} /></li>
        </ul>
      </div>
    )
  
        
      }
}
 
export default Influencer;