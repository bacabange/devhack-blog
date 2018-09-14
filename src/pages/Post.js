import React, { Component } from 'react';
import './post.css';
import { getPost } from '../utils/api';
import Highcharts from 'highcharts';

// Consumir API para traer el detalle del post https://jsonplaceholder.typicode.com/posts/:id
export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  componentDidMount() {
    Highcharts.chart('chart-container', {
      title: {
        text: 'Logarithmic axis demo',
      },

      xAxis: {
        tickInterval: 1,
      },

      yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}',
      },

      series: [
        {
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
          pointStart: 1,
        },
      ],
    });

    const id = this.props.match.params.id;
    getPost(id)
      .then(response => {
        this.setState({
          title: response.data.title,
          body: response.data.body,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="post-detail">
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>

        <div id="chart-container"> </div>
      </div>
    );
  }
}
