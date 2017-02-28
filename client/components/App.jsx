import React, {Component} from 'react';
import Delivery from './Delivery.jsx';
import ButtonDeliveryContainer from '../containers/ButtonDeliveryContainer.js';
import DeliveryListContainer from '../containers/DeliveryListContainer.js';
import AppHeader from './AppHeader.jsx';
import 'bootstrap-loader';

import '../custom_css/dashboard.css';
import '../custom_css/so.css';
import '../custom_css/po.css';
import '../custom_css/custom_style.css';
import '../custom_css/inventory.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="cls"></div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded mtrl_shadow1 navigation_bar container-fluid">
        <div className="col-xl-12">
            <div className="row">
              <div className="header col-xl-12 ">
                <div className="row">
                  <div className="col-7 col-sm-7 col-md-7 "> </div>
                  <div className="col-4 col-md-5  ">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               		 <div className="collapse navbar-collapse fr  " id="navbarTogglerDemo01" style={{padding: 0}}>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
                          <li className="nav-item ">
                            <a className="nav-link" href="dashboard.html">Dashboard</a>                  </li>
                          <li className="nav-item">
                            <a className="nav-link fnt18" href="inventory.html">Inventory</a>                  </li>
                          <li className="nav-item fnt18 active">
                            <a className="nav-link fnt18" href="#">Purchse Order  <span className="sr-only">(current)</span></a>                  </li>
                          <li className="nav-item">
                            <a className="nav-link fnt18" href="sales_order.html">Sales Order</a>                  </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="cls"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-11 page_body rounded">
              <div className="col-sm-12 page_title_border ">
                <div className="row">
                	<div className="col-sm-10">
    	            	<h1 className="page_title fnt28"> Purchase Order</h1>
                  </div>
                  <div className="col-sm-2 text-right">
                   	<span className="page_title_text">PO for Today</span>
                  </div>
                </div>
              </div>
              <div className="cls"></div>
              <ButtonDeliveryContainer />
              <DeliveryListContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
