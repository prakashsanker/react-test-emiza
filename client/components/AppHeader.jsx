import React, {Component} from 'react';

export default class AppHeader extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top mtrl_shadow1 container-fluid">
        <div className="col-xl-12">
          <div className="row">
            <div className="header col-xl-12 ">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-8">
                    <a className="navbar-brand" href="#">
                      <img src="images/emiza_logo.jpg"  className="img-responsive img-cntr" />
                    </a>
                </div>
                <div className="col-6 col-md-4">
                  <div className="row">
                    <div className="col-8 "><span className="username fnt14">Welcome! Mr. Shardul Sharmadhikar!</span></div>
               				<div className="col-4 text-right logout_icon emiza_blue">
                        <a href="#url">
                          <i className="fa fa-sign-out fa-lg" aria-hidden="true">
                          </i>
                          Logout
                        </a>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
