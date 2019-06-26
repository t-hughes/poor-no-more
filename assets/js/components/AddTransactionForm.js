import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from "semantic-ui-react";

class AddTransactionForm extends React.Component {
  render() {
    const { addTransaction, form, handleBlur, handleChange, resetForm } = this.props;

    return (
      <Form onSubmit={addTransaction}>
        <Form.Field
          control={Input}
          name="category"
          label="Category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          name="name"
          label="Name"
          value={form.name}
          placeholder='Transaction Name'
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          name="amount"
          label="Amount"
          value={form.amount}
          type="number"
          placeholder='Amount'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Form.Field
          control={Input}
          name="merchant"
          label="Merchant"
          value={form.merchant}
          placeholder='Merchant'
          onChange={handleChange}
        />
        <Form.Field
          control={Input}
          name="description"
          label="Description"
          value={form.description}
          placeholder='Description'
          onChange={handleChange}
        />
        <Form.Field
          control={Button}
          color="violet"
          type="submit"
          inverted
          style={{ width: '100%' }}
        >
          Add
        </Form.Field>
      </Form>
    );
  }
}

AddTransactionForm.propTypes = {
  addTransaction: PropTypes.func,
  form: PropTypes.object,
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  resetForm: PropTypes.func,
};

export default AddTransactionForm;
