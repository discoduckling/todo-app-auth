import { Menu } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HeaderBar extends Component {
    loginHandler = () => {
        console.log('login clicked');
        this.props.loginUser();
    }
    renderLogin = () => {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <a href='/auth/login'><Menu.Item name='login' link/></a>
            default:
                return <a href='/auth/logout'><Menu.Item name='logout' link/></a>
        }
    }
    render() {
        console.log(this.props);
        return (
            <Menu>
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

export default connect(mapStateToProps, actions)(HeaderBar);