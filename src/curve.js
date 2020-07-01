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

 
    // chartRef = React.createRef();
 
    // componentDidMount() {
    //     console.log(this.props);

    //     const myChartRef = this.chartRef.current.getContext("2d");        
    //     // this.setState({data:this.props.cur})
     
        
    //     new Chart(myChartRef, {
    //         type: "line",
    //         data: {
    //             //Bring in data
    //             // labels: this.state.data.labels,
    //             labels : ['ll','kk','mm'],
    //             datasets: [
    //                 {
    //                     label: "Sales",
    //                     // data: this.state.data.cur,
    //                     data : this.state.data.datasets.data
    //                 }
    //             ]
    //         },
    //         options: {
    //             //Customize chart options
    //         }
    //     });
    // }
    render() {

        return (
            <div className='curve' >
				{/* div className={classes.graphContainer} */}
        <spna>hi : {this.props.cur[0]}</spna>
        <spna>hi : {this.props.cur[1]}</spna>

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