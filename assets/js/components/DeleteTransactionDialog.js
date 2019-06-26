import React from 'react'
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

class DeleteTransactionDialog extends React.Component {
  cancel = () => {
    this.props.closeDialog();
  };

  confirm = () => {
    this.props.closeDialog();
    this.props.confirm();
  };

  render() {
    const { alertDescription, alertTitle, close, open } = this.props;
    
    return (
      <Modal size="mini" open={open} onClose={this.cancel}>
        <Modal.Header>{alertTitle}</Modal.Header>
        <Modal.Content>
          <p>{alertDescription}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.cancel} negative>No</Button>
          <Button onClick={this.confirm} positive>Yes</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

DeleteTransactionDialog.propTypes = {
  alertDescription: PropTypes.string,
  alertTitle: PropTypes.string,
  open: PropTypes.func,
};

export default DeleteTransactionDialog;