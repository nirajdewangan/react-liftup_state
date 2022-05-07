import React from 'react';
import Child from './Child';
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: 'Parent',
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent = (child) => {
    alert('Hello ' + this.state.parentName + ' from ' + child);
  };

  render() {
    return (
      <div>
        <Child greetParent={this.greetParent} />
      </div>
    );
  }
}

export default Parent;
