import React, { Component } from 'react';
import HeaderBar from '../components/HeaderBar';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <HeaderBar />
      </div>
    );
  }
}


export default connect(null, actions)(App);
