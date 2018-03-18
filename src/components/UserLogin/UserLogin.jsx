import React from 'react';
import PropTypes from 'prop-types';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function UserLogin({ loggedIn, username, className }) {
  return loggedIn
    ? (<LoggedIn className={className} username={username} />)
    : (<LoggedOut className={className} />);
}

UserLogin.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
  className: PropTypes.string,
};

UserLogin.defaultProps = {
  className: '',
};

export default UserLogin;
