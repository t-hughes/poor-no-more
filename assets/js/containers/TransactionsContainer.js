import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Segment, Checkbox, Container, Header, Grid } from "semantic-ui-react";

import store from '../data/reduxStore';
import { convertAmountToRomanNumeral } from '../utils'
import AddTransactionForm from '../components/AddTransactionForm';
import TransactionsTable from '../components/TransactionsTable';
import { getTransactions, createTransaction } from '../data/actions/transactionsActions';

class TransactionsContainer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      form: {},
      deleteId: 0,
      deleteTransactionDialogOpen: false,
      isAmountRoman: false,
    }
  };

  componentDidMount() {
    store.dispatch(getTransactions());
  }

  resetForm() {
    this.setState({
      form: {
        name: '',
        category: '',
        merchant: '',
        amount: '',
        description: ''
      }
    });
  };

  addTransaction = () => {
    this.props.createTransaction({
      transaction: this.state.form
    });
    this.resetForm();
  };

  handleChange = (event) => {
    if (event.target.name === undefined) {
      throw new Error('Form inputs must have a name!');
    }
    this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value } });
  };

  handleBlur = (event) => {
    if (event.target.name == "amount") {
      event.target.value = parseFloat(event.target.value).toFixed(2);
    }
    this.setState({ form: { ...this.state.form, [event.target.name]: event.target.value } });
  };

  toggleRomanNumerals = () => {
    this.setState(state => ({ isAmountRoman: !state.isAmountRoman }));
  };

  getAmount = (amount) => this.state.isAmountRoman ? convertAmountToRomanNumeral(amount) : amount;

  render() {
    const { form, isAmountRoman } = this.state;

    return (
      <Container>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Header as="h2" textAlign="center">
                Add Transaction
              </Header>
              <Segment color="violet" raised style={{maxHeight: '530px' }}>
                <AddTransactionForm
                  form={form}
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
                  isAmountRoman={isAmountRoman}
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

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsContainer);
