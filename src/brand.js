import React , {Component}from 'react'
import config from './config' 

class Brand extends Component {
    constructor (props){
        super (props)
        this.state ={
            brands: {}
        }}
      
    componentDidMount() {

        const ref = config.ref('brands')
        ref.on('value', snapShot => {
          let dataa = snapShot.val() ;
          let data = Object.values(Object.values(dataa).filter(b => b.offerId === parseInt(this.props.offerId)))[0]

          this.setState({
            brands: {...data}
          });
        });
        
      }  


      
      render (){
        return ( <center>
        <ul>
        {/* <li>{this.state.brands.offerId}</li> */}
        <li><img src= {this.state.brands.pic} /></li>
        <li><h2>{this.state.brands.name}</h2></li>
 <br/>            </ul>

 </center> 
        )
      }
}
 
export default Brand;