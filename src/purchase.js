import React , {Component}from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import config from './config'
import Brand from './brand' 
import Influencer from './influencerItem'

import { Line } from "react-chartjs-2";


class Purchase extends Component {
    constructor (){
        super ()
        this.state ={
            purchases: [] ,
            sales:0 ,
            number: 0 ,
            influencer :[] ,
            monthList:[],
            monthsale:[]
        }}
      

    componentDidMount() {
        const ref = config.ref('conversions/purchase')
        ref.on('value', snapShot => {
          let dataa = snapShot.val() ;
          let data = (Object.values(dataa)).filter(b => b.offerId === parseInt (this.props.offerId))
console.log(data);


let infl = data.reduce(function (r, a) {
  r[a.affiliateId] = r[a.affiliateId] || [];
  r[a.affiliateId].push(a);
  return r;
}, Object.create(null));

console.log(infl);


let courbee =  data.reduce(function (r, a) {
  r[a.createdAt] = r[a.createdAt] || [];
  r[a.createdAt].push(a);
  return r;
}, Object.create(null));
// .map(e=>[e[0], e.length])


const conv=(d)=>{
  let jour = new Date(d).getDate()
  let mois = new Date(d).getMonth()+1
  return   jour + '-'+ mois
}
console.log(courbee);

let  mois = (Object.keys(courbee)).map(e=>parseInt(e)).map(e=>conv(e))

const k = mois.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
let monthday = (['0',...k.keys()])
let monthsale = ([0, ...k.values()])
let influ = Object.entries(infl).map(e=>e[0])


console.log(influ);


let amount = data.map(e=>e.amount).reduce(function(a, b){
  return a + b;
}, 0);

          this.setState({
            purchases: [ ...data] ,
            sales: data.length ,
            amount:amount ,
            influencer :influ,
            monthsale:monthsale,
            monthday:monthday
          });
        });

        
      }  

      
      render (){
      
      
// const purchasesList = Object.keys(this.state.purchases).map(key=>{
//     return <div> articleId : <p key = {key}> {this.state.purchases[key].articleId}</p>
//     amount :<p key = {key}> {this.state.purchases[key].amount}</p>
//     commission: <p key = {key}> {this.state.purchases[key].commission}</p>
//     influencer: <p key = {key}> {this.state.purchases[key].influencer}</p>
//     offerId : <p key = {key}> {this.state.purchases[key].offerId}</p>
//     createdAt : <p key = {key}> {this.state.purchases[key].createdAt}</p>


//     <br/> ------------------------  <br/>
//      </div>
//   })
  // .filter((el)=>((el.offerId))=== parseInt(this.props.offerId))









  const ff = {
    labels: this.state.monthday,
    datasets: [
      {
        label: "month",
        fill: false,
        data: this.state.monthsale,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        borderColor: "#742774"
      }
    ]
  };
  

    return (
      <div >
 <      Grid container>
        <Grid item xs={12} sm={4} md={4}> 
        <Brand offerId ={this.props.offerId}/>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
        <div className='sales'> 
        <span> <h2>sales number :{this.state.sales}</h2>
        <h2>sales amount :{this.state.amount} € </h2>
        {/* <h2>sales amount :{this.state.monthsale} € </h2>
        <h2>sales amount :{this.state.monthday} € </h2> */}


        </span>

    {/* <span>{this.state.purchases.influencer}</span>
    <span>{this.state.purchases.amount}</span>
    <span>{this.state.purchases.commission}</span>
    <li>{this.state.purchases.createdAt}</li> */} 
{/* <li>{purchasesList}  </li>   */}
   </div>
   </Grid>
   <Grid item xs={12} sm={5} md={5}>


      {/* <Curve cur= {this.state.monthsale } lab ={this.state.monthday}/> */}

      <Line data={ff} />


      </Grid>
      </Grid>
      
<center>
         {/* <h2>influencer : {this.state.influencer}</h2> */}
        {/* <Influencer kaffiliateId = {this.state.influencer} /> */}
        -----------------------------------------
        <br/>
        <Link to ='/'>   
                <Button variant="contained" color="primary" size="large" >    Home page  </Button>
            </Link>
            </center>
      </div>
    )
  
        
      }
}
 
export default Purchase;
 