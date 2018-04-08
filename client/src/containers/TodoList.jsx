import React, { Component } from 'react';
import { Table, Container, Button, Form, Modal, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';
class TodoList extends Component {
    state = {
        items: [
            {
                task: 'Walk the dog',
                id: '1'
            },
            {
                task: 'Make a sandwich',
                id: '2'
            },
            {
                task: 'Water the Plants',
                id: '3'
            },
        ],
        newText: '',
        open: false
    }

    componentDidMount() {
        this.props.getTodos();
    }
    completeHandler = (e, data) => {
        const newItems = this.state.items.filter(item => item.id !== data.itemId);
        this.setState({
            items: newItems
        })
    };
    onTextChange = (e, data) => {
        this.setState({ newText: data.value });
    }
    onAddNewTask = () => {
        const newTask = {
            task: this.state.newText,
            id: this.state.items.length
        };

        const newItems = [
            ...this.state.items,
            newTask
        ];
        this.setState({ items: newItems, newText: '' });
    };
    onEnterPress = (key) => {
        if (key === 'Enter') {
            this.onAddNewTask();
        }
    };
    clearAllHandler = () => {
        this.setState({ open: true })
    };
    deleteAllItems = () => {
        this.setState({
            open: false,
            items: []
        })
    }
    testAdd = () => {
        this.props.addTodo('new task');
    }
    renderItems = () => {
        let items = null;
        if (this.props.tasks) {
            items = this.props.tasks.map(item => {
                return (
                    <Table.Row>
                        <Table.Cell>{item.content}</Table.Cell>
                        <Table.Cell><Button floated='right' circular icon='checkmark' itemId={item.id} onClick={this.completeHandler}/></Table.Cell>
                    </Table.Row>
                )
            });
        }
        return items;
    };
    render() {
        const {open} = this.state;
        return (
            <div>
                <Button onClick={this.testAdd}>Test</Button>
                <div className="test" style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '5rem'}}>
                    <Modal open={open} basic size='mini' style={{ marginTop: '10%', marginLeft: 'auto', marginRight: 'auto'}}>
                        <Header icon='trash' content='Delete All Items' />
                        <Modal.Content>
                            <p>Are you sure you want to delete all todo items?</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button basic color='red' inverted onClick={() => this.setState({open: false})}>
                                <Icon name='remove' /> Cancel
                            </Button>
                            <Button color='green' inverted onClick={this.deleteAllItems}>
                                <Icon name='checkmark'/> Delete All
                            </Button>
                        </Modal.Actions>
                    </Modal>
                    <Table striped unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Tasks</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>
                        {this.renderItems()}
                        <Table.Row fullWidth>
                            <Table.Cell>
                                <Form>
                                    <Form.Group>
                                        <Form.Input 
                                            placeholder='New Task' 
                                            onChange={this.onTextChange} 
                                            value={this.state.newText}
                                            onKeyPress={(e) => this.onEnterPress(e.key)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Table.Cell>
                            <Table.Cell><Button floated='right' circular icon='add' color='purple' onClick={this.onAddNewTask}/></Table.Cell>
                        </Table.Row>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>
                                    <Button floated='left' size='small' color='green'>Save</Button>
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <Button floated='right' size='small' color='red' onClick={this.clearAllHandler}>Clear All</Button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {tasks: state.todos}
}

export default connect(mapStateToProps, actions)(TodoList);