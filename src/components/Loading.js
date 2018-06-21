import React, { Component } from 'react';

class LoadingComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let props = this.props;
    
    if (props.isLoading) {
      if (props.timedOut) {
        return <div>Loader timed out!</div>;
      } else if (props.pastDelay) {
        return <div>Loading...</div>;
      } else {
        return null;
      }
    } else if (props.error) {
      return <div>Error! Component failed to load</div>;
    } else {
      return null;
    }
  }
}

export default LoadingComponent;
