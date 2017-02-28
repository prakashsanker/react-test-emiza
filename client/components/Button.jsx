import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return (
      <div className="col-sm-12 button_row">
        <button type="button" className="btn btn-success fr fnt20" value="Fetch Deliveries" onClick={this.props.onClick}>
          Fetch Deliveries
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  status: React.PropTypes.string,
  onClick: React.PropTypes.func,
}
