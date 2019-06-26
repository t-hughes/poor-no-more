import React from 'react';
import { Link } from 'react-router-dom';

import { PageHeader } from './styles';

class NotFound extends React.Component {
  render() {
    return(
      <PageHeader>
        <h1>Oh Snap...</h1>
        <h2>This page does not exist!</h2>
        <h4>Go to the <Link to="/dashboard">Dashboard</Link> instead</h4>
      </PageHeader>
    )
  }
}

export default NotFound;