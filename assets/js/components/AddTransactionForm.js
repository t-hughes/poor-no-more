import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from "semantic-ui-react";

class AddTransactionForm extends React.Component {
  render() {
    const {
      addTransaction,
      createTransactionForm,
      handleBlur,
      handleChange,
      isFormEmpty,
    } = this.props;

    return (
      <Form onSubmit={addTransaction}>
        <Form.Field
          autoComplete="off"
          control={Input}
          name="category"
          label="Category"
          value={createTransactionForm.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <Form.Field
          autoComplete="off"
          control={Input}
          name="name"
          label="Name"
          value={createTransactionForm.name}
          placeholder='Transaction Name'
          onChange={handleChange}
        />
        <Form.Field
          autoComplete="off"
          control={Input}
          name="amount"
          label="Amount"
          value={createTransactionForm.amount}
          type="number"
          placeholder='Amount'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Field
          autoComplete="off"
          control={Input}
          name="merchant"
          label="Merchant"
          value={createTransactionForm.merchant}
          placeholder='Merchant'
          onChange={handleChange}
        />
        <Form.Field
          autoComplete="off"
          control={Input}
          name="description"
          label="Description"
          value={createTransactionForm.description}
          placeholder='Description'
          onChange={handleChange}
        />
        <Form.Field
          control={Button}
          color="violet"
          type="submit"
          inverted
          style={{ width: '100%' }}
          disabled={isFormEmpty}
        >
          Add
        </Form.Field>
      </Form>
    );
  }
}

AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func,
  createTransactionForm: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  isFormEmpty: PropTypes.bool,
  resetForm: PropTypes.func,
};

export default AddTransactionForm;
