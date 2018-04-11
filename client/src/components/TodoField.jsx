import React from 'react';
import { Form } from 'semantic-ui-react';

const TodoField = (props) => {
    // console.log(props);
    return (
        <Form.Input
            placeholder='New Task'
            {...props.input}
        />
    )
}
export default TodoField;