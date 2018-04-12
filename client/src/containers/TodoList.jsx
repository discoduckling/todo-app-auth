import React, { Component } from 'react';
import { Table, Button,  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import TodoField from '../components/TodoField';
import CancelModal from '../components/ClearModal';

class TodoList extends Component {
    state = {
        open: false
    }

    componentDidMount() {
        // console.log('updating');
        this.props.getTodos();
    }
    componentWillReceiveProps(nextProps) {
        console.log('newProps');
        this.props.getTodos();
    }

    renderItems = () => {
        let items = null;
        if (this.props.tasks) {
            items = this.props.tasks.map(item => {
                return (
                    <Table.Row>
                        <Table.Cell>{item.content}</Table.Cell>
                        <Table.Cell>
                            <Button 
                                floated='right' 
                                circular icon='checkmark' 
                                itemId={item._id} 
                                onClick={() => this.props.deleteTodo(item._id)}/>
                        </Table.Cell>
                    </Table.Row>
                )
            });
        }
        return items;
    };
    render() {
        return (
            <div>
                <div style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '5rem'}}>
                    <CancelModal 
                        open={this.state.open} 
                        closeModal={() => this.setState({ open: false })} 
                        deleteAll={() => this.props.deleteAllTodos()}
                        />
                    <Table striped unstackable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Tasks</Table.HeaderCell>
                                <Table.HeaderCell />
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.renderItems()}
                        <Table.Row>
                            <Table.Cell colSpan='2'>
                                <form
                                    onSubmit={this.props.handleSubmit(this.props.addTodo)}
                                >
                                    <Field
                                        type='text'
                                        name='content'
                                        component={TodoField}
                                    />
                                </form>
                            </Table.Cell>
                        </Table.Row>
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>
                                    <Button size='small' color='red' onClick={() => this.setState({ open: true })}>Clear All</Button>
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    
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

export default connect(mapStateToProps, actions)(reduxForm({
    form: 'add-todo'
})(TodoList));