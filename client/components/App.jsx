import React, {Component} from 'react';
import Delivery from './Delivery.jsx';
import ButtonDeliveryContainer from '../containers/ButtonDeliveryContainer.js';
import DeliveryListContainer from '../containers/DeliveryListContainer.js';
export default class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <ButtonDeliveryContainer />
        <DeliveryListContainer />
      </div>
    );
  }
}
