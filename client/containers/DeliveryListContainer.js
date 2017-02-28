import {connect} from 'react-redux';
import DeliveryList from '../components/DeliveryList.jsx';


const mapStateToProps = (state) => {
  console.log('what is state');
  console.log(state);
  return {
      deliveries: state.deliveries,
  };
};

const DeliveryListContainer = connect(
  mapStateToProps,
  null
)(DeliveryList)

export default DeliveryListContainer;
