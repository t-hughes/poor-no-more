import React from 'react'
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

class DeleteTransactionDialog extends React.Component {
  handleCancel = () => {
    this.props.closeDialog();
  };

  handleConfirm = () => {
    this.props.closeDialog();
    this.props.onConfirm();
  };

  render() {
    const { alertDescription, alertTitle, openDialog } = this.props;
    
    return (
      <Modal size="mini" open={openDialog} onClose={this.handleCancel}>
        <Modal.Header>{alertTitle}</Modal.Header>
        <Modal.Content>
          <p>{alertDescription}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleCancel} negative>No</Button>
          <Button onClick={this.handleConfirm} positive>Yes</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

DeleteTransactionDialog.propTypes = {
  alertDescription: PropTypes.string,
  alertTitle: PropTypes.string,
  openDialog: PropTypes.bool,
};

export default DeleteTransactionDialog;