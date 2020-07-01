import React , {Component}from 'react'
import config from './config'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor (){
        super ()
        this.state ={
            brands: {
              // offerId: brands.offerId ,

            }
        }}
      

    componentDidMount() {
        const ref = config.ref('brands')
        ref.on('value', snapShot => {
          let data = snapShot.val() ;
          console.log(data);    
          this.setState({
            brands: {...data}
          });
        });
      }  
      
      render (){
      
  
      const brandsList = Object.keys(this.state.brands).map(e=>{
        return <div> 
            <Link to = { `/purchases/${this.state.brands[e].offerId}`}> 
                <p key = {e}> {this.state.brands[e].name}</p>
                <p key = {e}> {this.state.brands[e].offerId}</p>
            </Link>
            <br/>   
        </div>
      })

        return (
              <center>
                  <h2> Veuillez cliquez sur la marque à consulter </h2>
                <span>{brandsList}</span>
            </center>
        )
      }
}
 
export default Home;