import React, {Component} from 'react';
import cx from 'classnames';

export default class DeliveryStatus extends Component {
  render() {
      const className = this.props.delivered ? "delivered" : "scheduled";
      const label = this.props.delivered ? "delivered" : "scheduled";
      return (
        <div className={className}>
          {label}
          <input type="button" value="click me" onClick={() => this.props.onClick()} />
        </div>
      )
  }
}

DeliveryStatus.propTypes = {
  delivered: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};
