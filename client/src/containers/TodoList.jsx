import React, { Component } from 'react';
import { Table, Container, Button } from 'semantic-ui-react';

class TodoList extends Component {
    state = {
        items: [
            {
                task: 'Walk the dog',
                completed: false
            },
            {
                task: 'Make a sandwich',
                completed: false
            },
            {
                task: 'Water the Plants',
                completed: false
            },
        ]
    }
    renderItems = () => {
        const items = this.state.items.map(item => {
            return (
                <Table.Row>
                    <Table.Cell>{item.task}</Table.Cell>
                    <Table.Cell><Button floated='right' circular icon='checkmark' /></Table.Cell>
                </Table.Row>
            )
        });

        return items;
    }
    render() {
        return (
            // <Container>
                <Table striped style={{width: '0rem', marginLeft: 'auto', marginRight: 'auto' }} unstackable>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>Groceries</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    {this.renderItems()}
                    <Table.Footer fullWidth>
                        <Table.Row>
                            <Table.HeaderCell />
                            <Table.HeaderCell>
                                <Button floated='right' size='small'>Save</Button>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            // </Container>
        )
    }
};

export default TodoList;