import React from 'react';

import TransactionsContainer from '../containers/TransactionsContainer';
import { PageHeader } from './styles';

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <PageHeader>
          <h1 className="dashboard-header">Budget Dashboard</h1>
        </PageHeader>
        <TransactionsContainer />
      </React.Fragment>
    );
  }
}

export default Dashboard;
