import React, { Component } from 'react'
// import Chart from "chart.js";
import {Line} from 'react-chartjs-2';

 class Curve extends Component {

    constructor(props) {
        super(props);
        this.state = {
          //   labels: ['January', 'February', 'March',
          //  'April', 'May'],
            labels:props.lab,
            datasets: [
                {
                  label: 'Sales',
                  fill: false,
                  lineTension: 0.5,
                  backgroundColor: 'rgba(75,192,192,1)',
                  borderColor: 'rgba(0,0,0,1)',
                  borderWidth: 2,
                  data: props.cur
                }
              ]
      
    }

}
 

componentDidMount() {
      console.log(this.props);
      this.setState({labels:this.props.lab})
}

    render() {

        return (
            <div className='curve' >
        <div>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
            </div>
        )
    }
}


export default Curve