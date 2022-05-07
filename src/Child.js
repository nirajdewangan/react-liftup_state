import React from 'react';

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.greetParent('Child')}>
          Greet Parent
        </button>
      </div>
    );
  }
}

export default Child;
