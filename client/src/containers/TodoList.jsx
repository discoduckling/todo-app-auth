import React, { Component } from 'react';
import { Table, Button,  } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import TodoField from '../components/TodoField';
import CancelModal from '../components/ClearModal';

class TodoList extends Component {
    state = {
        newText: '',
        open: false
    }

    componentDidMount() {
        // console.log('updating');
        this.props.getTodos();
    }
    componentWillReceiveProps(nextProps) {
        this.props.getTodos();
    }
    // completeHandler = (e, data) => {
    //     const newItems = this.state.items.filter(item => item.id !== data.itemId);
    //     this.setState({
    //         items: newItems
    //     })
    // };
    // onTextChange = (e, data) => {
    //     this.setState({ newText: data.value });
    // }
    // onAddNewTask = () => {
    //     this.props.addTodo({ content: this.state.newText });
    //     // this.props.addTodo({ content: 'new task' })
    //     this.setState({ newText: '' });
    // };
    // onEnterPress = (key) => {
    //     if (key === 'Enter') {
    //         this.onAddNewTask();
    //     }
    // };
    // clearAllHandler = () => {
    //     this.setState({ open: true })
    // };
    // deleteAllItems = () => {
    //     this.setState({
    //         open: false,
    //         items: []
    //     })
    // }
    // taskAdd = () => {
    //     // this.props.addTodo({ content: 'test task' });
    //     this.props.addTodo({ content: this.state.newText });
    //     this.setState({
    //         newText: ''
    //     })
    // }
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
        return (
            <div>
                <div className="test" style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '5rem'}}>
                    <CancelModal open={this.state.open} closeModal={() => this.setState({ open: false })} />
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
                            <Table.Cell>
                                {/* <Button 
                                    floated='right' 
                                    circular icon='add' 
                                    color='purple' 
                                    // onClick={this.onAddNewTask}
                                    onClick={this.taskAdd}
                                /> */}
                            </Table.Cell>
                        </Table.Row>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>
                                    <Button floated='left' size='small' color='green'>Save</Button>
                                </Table.HeaderCell>
                                <Table.HeaderCell>
                                    <Button floated='right' size='small' color='red' onClick={() => this.setState({ open: true })}>Clear All</Button>
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