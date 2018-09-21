import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css';

let data = {
  name: 'Parent',
  children: [
    {
      name: 'Child One',
      children: [{ name: 'Otro One' }],
    },
    {
      name: 'Child Two',
      gProps: {
        className: 'red-node',
        onClick: node => console.log(`Clicked ${node}!`),
      },
    },
  ],
};

export default class Chart extends Component {
  render() {
    return (
      <div>
        <Tree
          data={data}
          height={400}
          width={400}
          animated
          gProps={{
            onClick: () => console.log('Click Node'),
          }}
          svgProps={{
            transform: 'rotate(90)',
          }}
        />
      </div>
    );
  }
}
