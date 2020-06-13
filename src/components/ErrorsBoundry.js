import React from 'react';
import { withRouter } from 'react-router-dom';

class ErrorsBoundary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    if (error) {
      this.props.history.push('/error');
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ErrorsBoundary);