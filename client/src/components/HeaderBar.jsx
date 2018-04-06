import { Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

class HeaderBar extends Component {
    loginHandler = () => {
        console.log('login clicked');
    }
    render() {
        return (
            <Menu stackable >
                <Menu.Item>
                    Thing 1
                </Menu.Item>
                <Menu.Item>
                    Thing 1
                </Menu.Item>
                <Menu.Item>
                    Thing 1
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='login' onClick={this.loginHandler} />
                </Menu.Menu>
            </Menu>
        )
    }
}

export default HeaderBar;