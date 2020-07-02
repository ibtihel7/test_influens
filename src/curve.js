import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Curve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      data: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      labels: nextProps.lab,
      data: nextProps.cur,
    });
  }

  render() {
    const labels = this.state.labels;
    const data = this.state.data;
    let curve = {
      labels: [...labels],
      datasets: [
        {
          label: "Sales",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [...data],
        },
      ],
    };

    return (
      <div className="curve">
        <div>
          <Line
            data={curve}
            options={{
              title: {
                display: true,
                text: "Average sales",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Curve;
