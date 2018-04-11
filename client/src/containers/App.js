import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <HeaderBar />
            <Route exact path='/todo_list' component={TodoList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
