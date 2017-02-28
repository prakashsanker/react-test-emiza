import { connect } from 'react-redux';
import { deliveryDelivered } from '../actions/index.js';
import DeliveryStatus from '../components/DeliveryStatus.jsx';

const mapStateToProps = (state) => {
  return {
    delivered: state.status,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(deliveryDelivered());
    },
  };
}


const DeliveryStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeliveryStatus)

export default DeliveryStatusContainer;
