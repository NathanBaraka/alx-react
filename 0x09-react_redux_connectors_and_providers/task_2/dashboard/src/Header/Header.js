import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

const Header = ({ user, logout }) => {
  return (
    <header>
      {user && <a href="#" onClick={logout}>Logout</a>}
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

const mapDispatchToProps = {
  logout,
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

