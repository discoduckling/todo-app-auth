import { Menu } from 'semantic-ui-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class HeaderBar extends Component {
    loginHandler = () => {
        this.props.loginUser();
    }
    renderLogin = () => {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <Menu.Menu position='right'>
                        <a href='/auth/login'><Menu.Item name='login' link/></a>
                    </Menu.Menu>
                )
            default:
                return (
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='/todo_list'>
                            Todo List
                        </Menu.Item>
                        <a href='/auth/logout'>
                            <Menu.Item name='logout' link/>
                        </a>
                    </Menu.Menu>
                )
        }
    }
    render() {
        // console.log(this.props);
        return (
            <Menu>
                <Menu.Item>
                    Home
                </Menu.Item>
                    {this.renderLogin()}
            </Menu>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return { auth };
}

export default connect(mapStateToProps, actions)(HeaderBar);