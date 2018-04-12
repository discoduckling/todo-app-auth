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
                        <a href='/auth/login'><Menu.Item name='login' link style={{ color: 'white' }}/></a>
                    </Menu.Menu>
                )
            default:
                return (
                    <Menu.Menu position='right' >
                        <Menu.Item as={Link} to='/todo_list' style={{ color: 'white' }}>
                            Todo List
                        </Menu.Item>
                        <a href='/auth/logout'>
                            <Menu.Item name='logout' link style={{ color: 'white' }}/>
                        </a>
                    </Menu.Menu>
                )
        }
    }
    render() {
        // console.log(this.props);
        return (
            <Menu compact style={{ backgroundColor: 'rgba(255,255,255,.3)' }}>
                <Menu.Item as={Link} to='/'>
                    <div id='logo'>Another Todo App</div>
                </Menu.Item>
                <Menu.Item as={Link} to='/about' style={{ color: 'white' }}>
                    About
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