import React from 'react';
import axios from 'axios';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Segment, Checkbox, Container, Header, Grid } from "semantic-ui-react";

import { convertAmountToRomanNumeral } from '../utils'
import AddTransactionForm from '../components/AddTransactionForm';
import TransactionsTable from '../components/TransactionsTable';
import { createTransaction } from '../data/actions/transactionsActions';

const newForm = {
  name: '',
  category: '',
  merchant: '',
  amount: '',
  description: ''
};

class TransactionsContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      form: {},
      amountIsRoman: false,
      deleteId: 0,
      deleteTransactionDialogOpen: false,
      isAmountRoman: false,
    }
  };

  componentDidMount() {
    return axios.get('http://localhost:4000/api/transactions')
      .then(function (response) {
        console.log(response);
        return response;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
  }

  resetForm() {
    this.setState({ form: newForm });
  };

  addTransaction = () => {
    this.props.createTransaction({
      transaction: this.state.form
    });
    this.resetForm();
  };

  handleChange = (name) => (event) => {
    this.setState({ form: { ...this.state.form, [name]: event.target.value } });
  };

  handleBlur = (name) => (event) => {
    if (name == "amount") {
      event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    this.setState({ form: { ...this.state.form, [name]: event.target.value } });
  };

  toggleRomanNumerals = () => {
    this.setState(state => ({ isAmountRoman: !state.isAmountRoman }));
  };

  getAmount = (amount) => this.state.isAmountRoman ? convertAmountToRomanNumeral(amount) : amount;

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Header as="h2" textAlign="center"> Add Transaction </Header>
              <Segment color="violet" raised style={{maxHeight: '530px' }}>
                <AddTransactionForm
                  form={this.state.form}
                  resetForm={this.resetForm}
                  addTransaction={this.addTransaction}
                  handleChange={this.handleChange}
                  handleBlur={this.handleBlur}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column width={9}>
              <Checkbox label="Roman Numerals" toggle onChange={this.toggleRomanNumerals}/>
              <Segment raised color="violet" style={{ overflow: 'auto', maxHeight: '530px' }}>
                <TransactionsTable
                  isAmountRoman={this.state.isAmountRoman}
                  getAmount={this.getAmount}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

TransactionsContainer.propTypes = {
  createTransaction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  createTransaction: payload => dispatch(createTransaction(payload))
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(TransactionsContainer);
