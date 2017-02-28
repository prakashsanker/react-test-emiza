import React, {Component} from 'react';
import Delivery from './Delivery.jsx';

export default class DeliveryList extends Component {
  renderDelivery(deliveryObj, key) {
    return (
      <Delivery
          key={key}
          docket={deliveryObj.Docket}
          customer={deliveryObj.Customer}
          deliveryLocation={deliveryObj.AT}
          status={deliveryObj.Status}
      />
    );
  }
  render() {
    const deliveries = this.props.deliveries;
    return (
      <div className="col-sm-11 page_content">
        <div className="row">
          {
            deliveries ?
            deliveries.map((delivery, i) => this.renderDelivery(delivery, i)) :
            "No Deliveries"
          }
        </div>
      </div>
    );
  }
}


DeliveryList.propTypes = {
  deliveries: React.PropTypes.array,
};
