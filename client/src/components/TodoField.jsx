import React from 'react';
import { Input } from 'semantic-ui-react';

const TodoField = (props) => {
    // console.log(props);
    return (
        <Input
            style={{ width: '100%' }}
            placeholder='New Task'
            action={{ color: 'purple', labelPosition: 'right', icon: 'add', content: 'Add Task'}}
            {...props.input}
        />
    )
}
export default TodoField;