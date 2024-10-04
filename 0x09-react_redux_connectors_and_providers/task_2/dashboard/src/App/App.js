import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginRequest } from '../actions/uiActionCreators';

const App = ({ login }) => {
  const handleLogin = () => {
    login();
  };

  return (
    <div>
      {/* Your App components */}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const mapDispatchToProps = {
  login: loginRequest,
};

App.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);

