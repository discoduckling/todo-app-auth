import { Menu } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeaderBar extends Component {
    loginHandler = () => {
        console.log('login clicked');
    }
    renderLogin = () => {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <Menu.Item name='login' onClick={this.loginHandler} />
            default:
                return <Menu.Item name='logout' onClick={this.loginHandler} />
        }
    }
    render() {
        console.log(this.props);
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
                    {this.renderLogin()}
                </Menu.Menu>
            </Menu>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return { auth };
}

export default connect(mapStateToProps)(HeaderBar);