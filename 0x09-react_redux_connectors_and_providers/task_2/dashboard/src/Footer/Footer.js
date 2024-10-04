import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Footer = ({ user }) => {
  return (
    <footer>
      <p>{user ? `Logged in as: ${user.email}` : 'Not logged in'}</p>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

Footer.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps)(Footer);

