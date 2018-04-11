// Modal for confirmin whether or not you really want to clear all todos

import React from 'react';
import { Button, Modal, Header, Icon } from 'semantic-ui-react';

const ClearModal = (props) => {
    return(
        <Modal open={props.open} basic size='mini' style={{ marginTop: '10%', marginLeft: 'auto', marginRight: 'auto'}}>
            <Header icon='trash' content='Delete All Items' />
            <Modal.Content>
                <p>Are you sure you want to delete all todo items?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={props.closeModal}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={() => {props.deleteAll(); props.closeModal()}}>
                    <Icon name='checkmark'/> Delete All
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ClearModal;