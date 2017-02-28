import React, {Component} from 'react';

export default class Delivery extends Component {
  render() {
    return (
      <div key={this.props.key} className="Delivery col-sm-12 record_row mtrl_shadow1">
        <p className="fnt18"><a href="#url">PO No. 0000145</a></p>
        <p className="fnt12">PO - for Customer / Individual name </p>
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
