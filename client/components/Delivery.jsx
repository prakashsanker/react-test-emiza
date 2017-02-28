import React, {Component} from 'react';
import {ON_TIME, DELAYED} from '../constants/constants.js';

import './styles/Delivery.css';

export default class Delivery extends Component {
  render() {
    let className = "col-sm-12 record_row mtrl_shadow1";
    if (this.props.status === ON_TIME) {
      className += " delivered";
    } else {
      className += " delayed";
    }
    return (
      <div key={this.props.key} className={className}>
        <p className="fnt18"><a href="#url"> {this.props.docket}</a></p>
        <p className="fnt12">{this.props.customer} </p>
        <p className="fnt12">{this.props.deliveryLocation} </p>
        <p className="fnt12">{this.props.status} </p>
      </div>
    )
  }
}

Delivery.propTypes = {
  docket: React.PropTypes.string,
  customer: React.PropTypes.string,
  deliveryLocation: React.PropTypes.string,
  status: React.PropTypes.string, //make this oneOf?
};
