import React from 'react';
import { Form } from 'semantic-ui-react';

const TodoField = () => {
    return (
        <Form.Input
            placeholder='New Task'
            // onChange={this.onTextChange}
            // value={this.state.newText}
            // onKeyPress={(e) => this.onEnterPress(e.key)}
        />
    )
}
export default TodoField;