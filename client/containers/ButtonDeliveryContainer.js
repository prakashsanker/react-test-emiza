import {connect} from 'react-redux';
import {fetchDeliveries} from '../actions/index.js';
import Button from '../components/Button.jsx';


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(fetchDeliveries())
    }
  }
}

const mapStateToProps = (state) => {
  return {
      status: state.status,
  };
}

const ButtonDeliveryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonDeliveryContainer;
