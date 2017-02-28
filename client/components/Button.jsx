import React, {Component} from 'react';

export default class Button extends Component {
  render() {
    return (
      <div>
        {this.props.status}
        <button value="Fetch Deliveries" onClick={this.props.onClick}>
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
