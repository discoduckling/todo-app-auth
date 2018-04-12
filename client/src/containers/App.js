import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import TodoList from './TodoList';
import Landing from '../components/Landing';
import About from '../components/About';
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
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default connect(null, actions)(App);
