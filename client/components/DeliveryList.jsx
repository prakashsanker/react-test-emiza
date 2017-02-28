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
    console.log("what are deliveries");
    console.log(deliveries.length);
    return (
      <div>
        {
          deliveries ?
          deliveries.map((delivery, i) => this.renderDelivery(delivery, i)) :
          "No Deliveries"
        }
      </div>
    );
  }
}


DeliveryList.propTypes = {
  deliveries: React.PropTypes.array,
};
