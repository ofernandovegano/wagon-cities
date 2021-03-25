import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class City extends Component {

  render() {
    return (
      <li className="list-group-item"
        onClick={() => props.selectCity(props.city)}
      >{this.props.city.name}</li>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default City;