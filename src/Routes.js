import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Home from './Home'
import Curve  from './curve'
import Article from './article';
import Purchase from './purchase'
class Routes extends Component {
    render() { 
        return ( 
            <div className='routes-container'>
             <Route exact path='/' component={Home}/>
             <Route exact path='/curve' component={Curve}/>
             {/* <Route exact path='/influencers' component={Influencer}/> */}
           
             <Route exact path='/articles' component={Article}/>
             <Route exact path='/purchases/:offerId' 
                          render={props=><Purchase offerId={props.match.params.offerId}/>}/>

            
            </div>
         );
    }
}
 
export default Routes;