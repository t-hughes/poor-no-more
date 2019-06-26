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
          label="Category"
          value={form.category}
          placeholder="Category"
          onChange={handleChange('category')}
        />
        <Form.Field
          control={Input}
          label="Name"
          value={form.name}
          placeholder='Transaction Name'
          onChange={handleChange('name')}
        />
        <Form.Field
          control={Input}
          label="Amount"
          value={form.amount}
          type="number"
          placeholder='Amount'
          onChange={handleChange('amount')}
          onBlur={handleBlur('amount')}
        />
        <Form.Field
          control={Input}
          label="Merchant"
          value={form.merchant}
          placeholder='Merchant'
          onChange={handleChange('merchant')}
        />
        <Form.Field
          control={Input}
          label="Description"
          value={form.description}
          placeholder='Description'
          onChange={handleChange('description')}
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Button}
            color="violet"
            type="submit"
            inverted
          >
            Add
          </Form.Field>
          <Form.Field
            control={Button}
            color="red"
            inverted
            onClick={resetForm}
          >
            Clear
          </Form.Field>
        </Form.Group>
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
